/* Fluid-art pour renderer.
 *
 * A domain-warped fbm field, moving at the speed of ink spreading in water.
 * Two palettes ship: `hemodynamic`, grounded in what blood and plasma actually
 * look like, and `biophilic`, the ocean-into-chlorophyll reading. Three
 * instances of the field run on the page — hero, case panel — and the case
 * panel's turbulence is driven by the blood-pressure reading.
 */

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;

uniform vec2  uRes;
uniform float uTime;
uniform float uTurb;   // 0 = laminar, 1 = turbulent
uniform float uWarm;   // 0 = resting, 1 = pressure high
uniform float uScale;
uniform float uPaleMix; // how far the thinnest film lifts toward the ground

uniform vec3 uDeep;    // ridges where the pour runs thick
uniform vec3 uHueA;    // first pigment
uniform vec3 uHueB;    // second pigment
uniform vec3 uPale;    // the ground reading through thin paint
uniform vec3 uAccent;  // signal colour, appears only under pressure

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 6; i++) {
    v += a * noise(p);
    p = p * 2.02;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  p *= uScale;

  float t = uTime;
  float warp = 3.2 + uTurb * 4.4;

  // Two rounds of domain warping give the stretched veins and soft cells that
  // a fluid makes when it is poured rather than brushed.
  vec2 q = vec2(fbm(p + vec2(0.0, 0.0)), fbm(p + vec2(5.2, 1.3)));
  vec2 r = vec2(
    fbm(p + warp * q + vec2(1.7, 9.2) + 0.150 * t),
    fbm(p + warp * q + vec2(8.3, 2.8) + 0.126 * t)
  );
  float f = fbm(p + warp * r);

  // A separate, larger, slower field carries the hue boundary across the
  // canvas, so the two pigments visibly migrate into each other instead of
  // sitting in fixed zones. For blood this is the oxygenation gradient.
  float blend = fbm(p * 0.72 + vec2(0.085 * t, -0.062 * t));
  vec3 pigment = mix(uHueA, uHueB, smoothstep(0.30, 0.72, blend));

  // Beer-Lambert. Transmittance falls exponentially with path length, which is
  // why a thin film of blood is scarlet while a pool of it reads near-black:
  // same pigment, different thickness. f stands in for how deep the fluid lies.
  float film = clamp(f, 0.0, 1.0);
  float trans = exp(-3.4 * film);

  vec3 col = mix(uDeep, pigment, smoothstep(0.015, 0.50, trans));
  col = mix(col, uPale, smoothstep(0.52, 0.96, trans) * uPaleMix);

  // Ridges where the pour piles against itself.
  float vein = smoothstep(0.50, 0.68, f) - smoothstep(0.70, 0.87, f);
  col = mix(col, uDeep, vein * (0.18 + 0.20 * uTurb));

  // Signal colour, present only as the reading climbs.
  float heat = smoothstep(0.42, 0.86, f) * uWarm;
  col = mix(col, uAccent, heat * 0.62);

  // Canvas tooth, then a gentle lift at the edges to keep the key light.
  float grain = (hash(gl_FragCoord.xy * 0.55) - 0.5) * 0.03;
  col += grain;

  vec2 v = (gl_FragCoord.xy / uRes) - 0.5;
  col = mix(col, uPale, clamp(dot(v, v) * 0.55, 0.0, 1.0));

  gl_FragColor = vec4(col, 1.0);
}
`;

/* Both palettes sit in a light key: tinted washes over a pale ground rather
 * than pigment over black.
 *
 * hemodynamic — what blood actually looks like rather than what it looks like
 * in a horror film. Plasma is straw-yellow and makes up over half of blood by
 * volume; arterial rose and venous plum are the two haemoglobin states in thin
 * section. Clinical, not gore.
 *
 * biophilic — the ocean-into-chlorophyll reading.
 */
const PALETTES = {
  hemodynamic: {
    deep: [0.290, 0.055, 0.075], // #4A0E13 whole blood, thick enough to read near-black
    hueA: [0.659, 0.075, 0.129], // #A81321 oxygenated arterial
    hueB: [0.420, 0.071, 0.125], // #6B1220 deoxygenated venous, faint purple cast
    pale: [0.937, 0.890, 0.690], // #EFE3B0 plasma, straw
    accent: [0.824, 0.122, 0.149], // #D21F26 fully saturated arterial jet
    paleMix: 0.66,
  },
  biophilic: {
    deep: [0.180, 0.416, 0.447], // #2E6A72
    hueA: [0.486, 0.749, 0.808], // #7CBFCE ocean
    hueB: [0.576, 0.796, 0.651], // #93CBA6 chlorophyll
    pale: [0.965, 0.980, 0.965], // #F6FAF6
    accent: [0.886, 0.439, 0.361], // #E2705C
    paleMix: 0.92,
  },
};

const STILL = window.matchMedia('(prefers-reduced-motion: reduce)');

function compile(gl, type, src) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn('pour: shader failed', gl.getShaderInfoLog(shader));
    return null;
  }
  return shader;
}

function createPour(canvas, options) {
  const {
    speed = 0.6,
    scale = 1.6,
    turbulence = 0.25,
    warmth = 0.0,
    palette = 'hemodynamic',
  } = options || {};

  const fail = () => {
    canvas.closest('[data-pour-host]')?.classList.add('is-fallback');
    return null;
  };

  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, depth: false });
  if (!gl) return fail();

  const vs = compile(gl, gl.VERTEX_SHADER, VERT);
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return fail();

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn('pour: link failed', gl.getProgramInfoLog(program));
    return fail();
  }
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(program, 'aPos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const u = (name) => gl.getUniformLocation(program, name);
  const uRes = u('uRes');
  const uTime = u('uTime');
  const uTurb = u('uTurb');
  const uWarm = u('uWarm');
  const uHue = { deep: u('uDeep'), hueA: u('uHueA'), hueB: u('uHueB'), pale: u('uPale'), accent: u('uAccent') };
  const uPaleMix = u('uPaleMix');

  gl.uniform1f(u('uScale'), scale);

  const state = { turbulence, warmth };
  let clock = 12.5;
  let last = 0;
  let frame = null;
  let visible = true;

  function applyPalette(name) {
    const set = PALETTES[name] || PALETTES.hemodynamic;
    Object.keys(uHue).forEach((key) => gl.uniform3fv(uHue[key], set[key]));
    gl.uniform1f(uPaleMix, set.paleMix);
  }

  function resize() {
    // Capped so a retina phone is not asked to shade four times the pixels it
    // can show the difference between.
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
    const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (canvas.width === w && canvas.height === h) return false;
    canvas.width = w;
    canvas.height = h;
    gl.viewport(0, 0, w, h);
    gl.uniform2f(uRes, w, h);
    return true;
  }

  function draw() {
    gl.uniform1f(uTime, clock);
    gl.uniform1f(uTurb, state.turbulence);
    gl.uniform1f(uWarm, state.warmth);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  function tick(now) {
    frame = requestAnimationFrame(tick);
    const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
    last = now;
    clock += dt * speed * (1 + state.turbulence * 0.85);
    resize();
    draw();
  }

  function start() {
    if (frame || STILL.matches) return;
    last = 0;
    frame = requestAnimationFrame(tick);
  }

  function stop() {
    if (!frame) return;
    cancelAnimationFrame(frame);
    frame = null;
  }

  function render() {
    // One frame of this field is a finished poured canvas, so the
    // reduced-motion version is a still painting rather than a blank panel.
    resize();
    draw();
  }

  applyPalette(palette);
  resize();
  draw();

  if (!STILL.matches) start();

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible) start();
      else stop();
    }, { rootMargin: '80px' });
    io.observe(canvas);
  }

  window.addEventListener('resize', () => {
    if (resize() && !frame) draw();
  });

  STILL.addEventListener('change', () => {
    if (STILL.matches) {
      stop();
      render();
    } else if (visible) {
      start();
    }
  });

  return {
    set(next) {
      Object.assign(state, next);
      if (!frame) render();
    },
    setPalette(name) {
      applyPalette(name);
      if (!frame) render();
    },
  };
}

window.createPour = createPour;
