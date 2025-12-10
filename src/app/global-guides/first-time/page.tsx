export default function FirstTimePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-6 text-center">
            Wearing a Saree for the <span className="text-deep-burgundy">First Time</span>
          </h1>
          <p className="text-xl text-soft-gray text-center mb-16">
            A complete guide for absolute beginners — anywhere in the world.
          </p>

          {/* Mindset */}
          <div className="card mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
              First: The Mindset
            </h2>
            <div className="space-y-4 text-soft-gray leading-relaxed">
              <p>
                A saree isn't a dress. It's <strong className="text-charcoal">6 meters of fabric you wrap around your body</strong>. No zippers, no buttons — just draping technique and a few safety pins.
              </p>
                <p>
                It takes practice. Your first attempt will be messy. Your third will be better. By your tenth, you'll drape it in 10 minutes without a mirror.
              </p>
              <p className="text-sage-green font-semibold">
                Do NOT expect perfection the first time. Saree mastery is a skill, not a purchase.
              </p>
            </div>
          </div>

          {/* What You Need */}
          <div className="card mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
              What You Need
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-heading font-semibold text-deep-burgundy mb-3">
                  The Saree Itself
                </h3>
                <p className="text-soft-gray text-sm leading-relaxed">
                  5.5–6.5 meters of fabric. For your first saree, choose something lightweight (cotton, chiffon, or Chanderi silk) — NOT heavy Banarasi. Heavy sarees are harder to drape.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-deep-burgundy mb-3">
                  Petticoat
                </h3>
                <p className="text-soft-gray text-sm leading-relaxed">
                  A long skirt-like undergarment tied at the waist. Match it to your saree color (or wear skin tone). This is where you tuck the pleats.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-deep-burgundy mb-3">
                  Blouse
                </h3>
                <p className="text-soft-gray text-sm leading-relaxed">
                  A fitted crop top (sleeveless, short-sleeve, or long-sleeve). Get it tailored to your measurements. Off-the-rack rarely fits well.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-deep-burgundy mb-3">
                  Safety Pins
                </h3>
                <p className="text-soft-gray text-sm leading-relaxed">
                  At least 5-7 pins. You'll pin the pallu (decorative end) to your shoulder, and secure pleats at the waist.
                </p>
              </div>
            </div>
          </div>

          {/* Draping Steps (Nivi Style) */}
          <div className="card mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
              Draping (Nivi Style — Most Common)
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-deep-burgundy rounded-full flex items-center justify-center text-warm-cream font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-charcoal mb-2">
                    Tuck the Plain End
                  </h3>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    Start at your right hip. Tuck the plain end of the saree into your petticoat. Wrap it around your waist once (right to left, ending at the front).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-deep-burgundy rounded-full flex items-center justify-center text-warm-cream font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">
                    Make the Pleats
                  </h3>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    Hold the fabric at your navel. Make 5-7 pleats (each about 5 inches wide). Pin them together at the top. Tuck into petticoat at center front. Adjust so pleats fall straight.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-deep-burgundy rounded-full flex items-center justify-center text-warm-cream font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">
                    Wrap Around Again
                  </h3>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    Take the remaining fabric and wrap it around your waist (left to right) until you reach your left shoulder. This is the "pallu" — the decorative end piece.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-deep-burgundy rounded-full flex items-center justify-center text-warm-cream font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">
                    Drape the Pallu
                  </h3>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    Bring the pallu over your left shoulder (front to back). Let it hang down your back (or bring it forward over your arm for a traditional look). Pin to your blouse shoulder.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-deep-burgundy rounded-full flex items-center justify-center text-warm-cream font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">
                    Make Pallu Pleats (Optional)
                  </h3>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    For a neater look, make 3-5 small pleats in the pallu before pinning. This creates a fan shape on your shoulder.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-deep-burgundy rounded-full flex items-center justify-center text-warm-cream font-bold">
                  6
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">
                    Secure & Adjust
                  </h3>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    Use safety pins at: shoulder (pallu), waist pleats (inside), and any loose sections. Adjust length so saree just touches the ground. You're done!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="card mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
              Common First-Timer Mistakes
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-heading font-semibold text-sage-green mb-2">
                    ❌ Pleats Too Wide or Uneven
                </h3>
                <p className="text-soft-gray text-sm">
                  Solution: Each pleat should be 4-5 inches. Pin them together BEFORE tucking. Use a mirror to check alignment.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-sage-green mb-2">
                    ❌ Pallu Too Short or Too Long
                </h3>
                <p className="text-soft-gray text-sm">
                  Solution: Before making waist pleats, hold the pallu over your shoulder. Make sure there's 1-1.5 meters of fabric left. Adjust starting point if needed.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-sage-green mb-2">
                    ❌ Saree Keeps Slipping
                </h3>
                <p className="text-soft-gray text-sm">
                  Solution: Your petticoat needs to fit snugly. If it's too loose, the saree will slide. Also, use more safety pins — don't be shy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-sage-green mb-2">
                    ❌ Can't Walk Properly
                </h3>
                <p className="text-soft-gray text-sm">
                  Solution: Take smaller steps. A saree restricts leg movement (by design). You'll adapt. It's a glide, not a stride.
                </p>
              </div>
            </div>
          </div>

          {/* Video Resources */}
          <div className="card mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
              Video Tutorials (Coming Soon)
            </h2>
            <p className="text-soft-gray leading-relaxed mb-4">
              We're creating step-by-step video guides for 5 draping styles: Nivi (standard), Bengali (pallu over left shoulder with pleats), Gujarati (pallu in front), Maharashtrian (dhoti-style), and Lehenga Saree (pre-stitched).
            </p>
            <p className="text-soft-gray text-sm">
              In the meantime, YouTube has thousands of tutorials. Search "Nivi saree draping tutorial" for visual guides.
            </p>
          </div>

          {/* Confidence Tips */}
          <div className="card mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
              Wearing a Saree Outside India
            </h2>
            <div className="space-y-4 text-soft-gray leading-relaxed">
              <p>
                <strong className="text-white">You will get stares.</strong> Not because you look bad — because sarees are visually striking. Own it. You're wearing 3,000 years of textile history.
              </p>
              <p>
                <strong className="text-white">Pair with confidence.</strong> Structured draping + minimal jewelry = modern elegance. Messy draping + overdone jewelry = costume. Details matter.
              </p>
              <p>
                <strong className="text-white">Know the context.</strong> Sarees work at galas, weddings, operas, formal dinners. They're less practical for hiking, clubs, or casual brunches (unless it's a cotton saree).
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-soft-gray mb-6">
              Need help choosing your first saree?
            </p>
            <a href="/get-started" className="btn-primary inline-block">
                Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
