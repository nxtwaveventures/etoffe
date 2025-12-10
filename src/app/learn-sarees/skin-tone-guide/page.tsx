import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-cream': '#FAF7F2',
        'soft-terracotta': '#C17854',
        'deep-burgundy': '#8B4049',
        'sage-green': '#A8B5A0',
        'warm-sand': '#F5F1E8',
        'pale-gold': '#E8D5B5',
        'charcoal': '#3A3A3A',
        'soft-gray': '#6B6B6B',
      },
      fontFamily: {
        heading: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-crimson)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'h1': '3.5rem',
        'h2': '2.5rem',
        'h3': '1.875rem',
        'h4': '1.5rem',
        'body': '1.125rem',
        'small': '0.875rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(139, 64, 73, 0.08)',
        'card': '0 4px 12px rgba(139, 64, 73, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;

export default function SkinToneGuidePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-6 text-center">
            Skin Tone <span className="text-soft-terracotta">Guide</span>
          </h1>
          <p className="text-xl text-soft-gray text-center mb-16">
            Choose saree colors that enhance your natural complexion. No guesswork — just color theory.
          </p>

          {/* Understanding Undertones */}
          <div className="card mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
              Step 1: Find Your Undertone
            </h2>
            <p className="text-soft-gray leading-relaxed mb-6">
              Skin tone isn't just "light" or "dark." It's about <strong className="text-charcoal">undertones</strong> — the subtle hue beneath your skin surface. Three types:
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-deep-burgundy pl-6">
                <h3 className="text-xl font-heading font-semibold text-charcoal mb-2">
                  Cool Undertone (Pink, Red, Blue)
                </h3>
                <p className="text-soft-gray text-sm leading-relaxed mb-2">
                  Silver jewelry looks better on you than gold. Your veins appear blue/purple. You burn easily in the sun.
                </p>
                <p className="text-sage-green text-sm font-semibold">
                  Best saree colors: Jewel tones (emerald, sapphire, magenta), cool reds, icy pastels, silver zari
                </p>
              </div>

              <div className="border-l-4 border-pale-gold pl-6">
                <h3 className="text-xl font-heading font-semibold text-charcoal mb-2">
                  Warm Undertone (Yellow, Peach, Golden)
                </h3>
                <p className="text-soft-gray text-sm leading-relaxed mb-2">
                  Gold jewelry looks stunning. Your veins appear green. You tan easily without burning.
                </p>
                <p className="text-pale-gold text-sm font-semibold">
                  Best saree colors: Earth tones (rust, olive, mustard), warm reds, corals, orange, gold zari
                </p>
              </div>

              <div className="border-l-4 border-sage-green pl-6">
                <h3 className="text-xl font-heading font-semibold text-charcoal mb-2">
                  Neutral Undertone (Balanced)
                </h3>
                <p className="text-soft-gray text-sm leading-relaxed mb-2">
                  Both gold and silver look good. Your veins appear blue-green. You can wear most colors.
                </p>
                <p className="text-sage-green text-sm font-semibold">
                  Best saree colors: You're lucky — almost everything works. Experiment freely!
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-warm-sand rounded-lg">
              <p className="text-soft-gray text-sm">
                <strong className="text-deep-burgundy">Quick test:</strong> Hold white paper next to your face in natural light. Does your skin look pink (cool), yellow (warm), or balanced (neutral)?
              </p>
            </div>
          </div>

          {/* Color Recommendations by Skin Depth */}
          <div className="card mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
              Step 2: Match to Skin Depth
            </h2>
            
            <div className="space-y-8">
              {/* Fair Skin */}
              <div>
                <h3 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                  Fair Skin (All Undertones)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-deep-burgundy text-sm font-semibold mb-2">✓ Best Colors</p>
                    <ul className="text-soft-gray text-sm space-y-1">
                      <li>• Pastels (baby pink, mint, lavender)</li>
                      <li>• Jewel tones (emerald, ruby, sapphire)</li>
                      <li>• Bright whites and off-whites</li>
                      <li>• Contrast borders (dark body, bright border)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sage-green text-sm font-semibold mb-2">✗ Avoid</p>
                    <ul className="text-soft-gray text-sm space-y-1">
                      <li>• Neon colors (overwhelm pale skin)</li>
                      <li>• Very light beiges (wash out complexion)</li>
                      <li>• All-over heavy zari (too much shine)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Medium Skin */}
              <div>
                <h3 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                  Medium Skin (Wheatish/Olive)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-deep-burgundy text-sm font-semibold mb-2">✓ Best Colors</p>
                    <ul className="text-soft-gray text-sm space-y-1">
                      <li>• Vibrant hues (royal blue, deep green, magenta)</li>
                      <li>• Warm tones (coral, peach, mustard, rust)</li>
                      <li>• Rich golds and coppers</li>
                      <li>• Earth tones (terracotta, olive, burgundy)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sage-green text-sm font-semibold mb-2">✗ Avoid</p>
                    <ul className="text-soft-gray text-sm space-y-1">
                      <li>• Dull browns and grays</li>
                      <li>• Very pale pastels (low contrast)</li>
                      <li>• Muddy oranges</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Deep Skin */}
              <div>
                <h3 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                  Deep Skin (All Undertones)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-deep-burgundy text-sm font-semibold mb-2">✓ Best Colors</p>
                    <ul className="text-soft-gray text-sm space-y-1">
                      <li>• Bold, saturated colors (electric blue, hot pink, emerald)</li>
                      <li>• Metallics (gold, bronze, silver zari)</li>
                      <li>• Pure white (high contrast)</li>
                      <li>• Jewel tones with heavy zari work</li>
                      <li>• Deep purples, magentas, and burgundies</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sage-green text-sm font-semibold mb-2">✗ Avoid</p>
                    <ul className="text-soft-gray text-sm space-y-1">
                      <li>• Pastels (low contrast, wash out)</li>
                      <li>• Beige and tan (blend too much)</li>
                      <li>• Very dark colors without zari (disappear)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Traditional Indian Color Wisdom */}
          <div className="card mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
              Traditional Indian Color Wisdom
            </h2>
            <div className="space-y-4 text-soft-gray leading-relaxed">
              <p>
                Indian weavers have known color theory for millennia — long before Western "seasonal color analysis." Here's their approach:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-deep-burgundy mt-1">→</span>
                  <span><strong className="text-charcoal">Contrast is king:</strong> If you have deep skin, wear bright colors. If you have fair skin, wear jewel tones or pastels. Avoid low-contrast combinations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-deep-burgundy mt-1">→</span>
                  <span><strong className="text-charcoal">Zari as equalizer:</strong> Heavy gold/silver zari makes any color "work" because it adds luminosity and frames your face.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-deep-burgundy mt-1">→</span>
                  <span><strong className="text-charcoal">Border contrast:</strong> A saree with contrasting borders (e.g., navy body, red border) creates visual interest and flatters most skin tones.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-deep-burgundy mt-1">→</span>
                  <span><strong className="text-charcoal">Test with draping:</strong> Hold fabric near your face in daylight. Does your skin glow or look dull? Trust your eyes.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Examples */}
          <div className="card mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
              Real-World Examples
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-heading font-semibold text-sage-green mb-2">
                  Scenario: Cool-toned fair skin, formal event
                </h3>
                <p className="text-soft-gray text-sm">
                  <strong className="text-charcoal">Recommendation:</strong> Icy blue Chanderi silk with silver zari. Or deep emerald Kanjivaram with contrast red border. Avoid warm oranges and mustards.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-sage-green mb-2">
                  Scenario: Warm-toned medium skin, wedding guest
                </h3>
                <p className="text-soft-gray text-sm">
                  <strong className="text-charcoal">Recommendation:</strong> Rust or coral Banarasi with gold zari. Or deep maroon with gold borders. Avoid icy pinks and cool blues.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-sage-green mb-2">
                  Scenario: Deep skin, festive occasion
                </h3>
                <p className="text-soft-gray text-sm">
                  <strong className="text-charcoal">Recommendation:</strong> Bold magenta or electric blue with heavy gold zari. Or pure white Kanjivaram with contrast border. Avoid pastels and low-contrast beiges.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-sage-green mb-2">
                  Scenario: Neutral undertone, daily wear
                </h3>
                <p className="text-soft-gray text-sm">
                  <strong className="text-charcoal">Recommendation:</strong> You have maximum flexibility. Try earth tones (olive, terracotta), jewel tones, or pastels. Just ensure good contrast.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-soft-gray mb-6">
              Need personalized color advice for your custom saree?
            </p>
              <a href="/get-started" className="btn-primary inline-block">
              Work With Our Concierge
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Tailwind CSS Custom Styles */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
  }
  
  body {
    @apply bg-warm-cream text-charcoal font-body;
    line-height: 1.7;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading text-charcoal;
  }
}

@layer components {
  .btn-primary {
    @apply bg-soft-terracotta text-warm-cream px-8 py-4 rounded-2xl font-heading font-semibold hover:bg-deep-burgundy transition-all duration-300 shadow-soft hover:shadow-card;
  }

  .btn-secondary {
    @apply border-2 border-soft-terracotta text-soft-terracotta px-8 py-4 rounded-2xl font-heading font-semibold hover:bg-soft-terracotta hover:text-warm-cream transition-all duration-300;
  }

  .card {
    @apply bg-warm-sand border border-pale-gold rounded-2xl p-8 hover:shadow-card transition-all duration-300;
  }

  .section-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24;
  }
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  @apply bg-warm-cream;
}

::-webkit-scrollbar-thumb {
  @apply bg-soft-terracotta rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-deep-burgundy;
}
