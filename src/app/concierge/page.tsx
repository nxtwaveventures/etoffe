export default function ConciergePage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-deep-burgundy mb-6 text-center">
            Your Saree <span className="text-soft-terracotta">Concierge</span>
          </h1>
          <p className="text-sm text-soft-gray text-center mb-4">
            Please fill our <a href="/get-started" className="text-soft-terracotta underline">Get Started</a> consultation form before booking — we work with 5–10 clients per quarter.
          </p>
          <p className="text-xl text-soft-gray text-center mb-16">
            Custom 3–4 month weaving process. Direct access to Varanasi master weavers. We choose together.
          </p>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-12 text-center">
              The Process
            </h2>
            
            <div className="space-y-12">
              <div className="card">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-soft-terracotta rounded-full flex items-center justify-center text-warm-cream font-heading font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-charcoal mb-3">
                      Consultation & Vision
                    </h3>
                    <p className="text-soft-gray leading-relaxed">
                      Fill out our detailed Google Form. Tell us about your preferences: colors, occasions, cultural significance, skin tone, and personal alignment. We ask questions most sellers never think of.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-soft-terracotta rounded-full flex items-center justify-center text-warm-cream font-heading font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-charcoal mb-3">
                      Research & Weaver Coordination
                    </h3>
                    <p className="text-soft-gray leading-relaxed">
                      We research weaving techniques, regional traditions, and available master weavers in Varanasi. Then we collaborate with you — refining design, choosing motifs, selecting silk quality together.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-soft-terracotta rounded-full flex items-center justify-center text-warm-cream font-heading font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-charcoal mb-3">
                      Weaving (3-4 Months)
                    </h3>
                    <p className="text-soft-gray leading-relaxed">
                      The weaver begins. We send progress photos. You see your saree come to life on the loom. This isn't mass production — it's craft at the highest level.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-soft-terracotta rounded-full flex items-center justify-center text-warm-cream font-heading font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-charcoal mb-3">
                      Quality Check & Global Delivery
                    </h3>
                    <p className="text-soft-gray leading-relaxed">
                      We inspect every inch. Check motif alignment, zari quality, border symmetry. Then we ship globally with full tracking and authenticity documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What You Receive */}
          <div className="mb-20">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
                What You Receive
            </h2>
            <div className="card">
              <ul className="space-y-4 text-soft-gray">
                <li className="flex items-start gap-3">
                  <span className="text-soft-terracotta mt-1">✓</span>
                  <span>Your custom-woven saree (typically 5.5-6.5 meters)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-deep-burgundy mt-1">✓</span>
                  <span>Weaver's story & technique documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-deep-burgundy mt-1">✓</span>
                  <span>Care instructions specific to your silk/weave type</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-deep-burgundy mt-1">✓</span>
                  <span>Draping guide (video or illustrated)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-deep-burgundy mt-1">✓</span>
                  <span>Authenticity certificate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-deep-burgundy mt-1">✓</span>
                  <span>Lifetime support for styling & occasions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Investment */}
          <div className="mb-20">
              <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 text-center">
              Investment
            </h2>
              <div className="card text-center">
              <p className="text-soft-gray leading-relaxed mb-6">
                Pricing varies based on silk quality, weaving complexity, zari (gold/silver thread) density, and motif intricacy.
              </p>
                <p className="text-2xl font-heading text-charcoal mb-2">
                Typically: <span className="text-deep-burgundy">$XXX – $X,XXX USD</span>
              </p>
              <p className="text-soft-gray text-sm">
                Exact pricing discussed after initial consultation
              </p>
              <div className="mt-6">
                <span className="text-xs text-soft-gray/60">Secure payments via PayPal</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="/get-started" className="btn-primary inline-block text-lg px-10 py-5">
              Begin Consultation
            </a>
            <p className="text-soft-gray text-sm mt-4">
              Or contact us via <a href="/contact" className="text-soft-terracotta hover:underline">WhatsApp/Email</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
