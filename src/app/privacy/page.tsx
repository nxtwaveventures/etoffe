export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-warm-cream">
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
            Privacy Policy
          </h1>
          <p className="text-soft-gray/60 mb-12">Last updated: December 2025</p>

          <div className="space-y-8 text-soft-gray leading-relaxed">
            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                Your Privacy Matters
              </h2>
              <p>
                At 11 Sari, we take your privacy seriously. We collect only essential information needed to curate your perfect saree and facilitate the crafting process.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                Information We Collect
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact details: Name, email, WhatsApp number</li>
                <li>Saree preferences: Style, color, budget, occasion</li>
                <li>Shipping address (only after order confirmation)</li>
                <li>Payment information (processed securely via PayPal)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To curate 3 personalized saree choices for you</li>
                <li>To coordinate with our Varanasi weaving network</li>
                <li>To provide updates during the 2-3 month crafting process</li>
                <li>To arrange secure delivery to your location</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                What We Never Do
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li className="text-deep-burgundy font-medium">We never share buyer names or personal details publicly</li>
                <li className="text-deep-burgundy font-medium">We never sell your data to third parties</li>
                <li className="text-deep-burgundy font-medium">We never send marketing emails without your consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                Buyer Stories & Privacy
              </h2>
              <p>
                Our blog shares anonymous buyer journeys to inspire others. We share the saree story, not your identity. All personal details remain confidential.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                Cookies
              </h2>
              <p>
                We use minimal cookies to improve your browsing experience. No tracking, no ads, no surveillance capitalism.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                GDPR Compliance
              </h2>
              <p>
                We comply with GDPR regulations. You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Access your data</li>
                <li>Request data deletion</li>
                <li>Opt out of communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                Data Security
              </h2>
              <p>
                Your information is stored securely and accessible only to essential team members involved in your saree journey.
              </p>
            </div>

            <div className="pt-8 border-t border-pale-gold/20">
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                Questions?
              </h2>
              <p>
                Contact us at{' '}
                <a href="mailto:privacy@11sari.com" className="text-deep-burgundy hover:text-soft-terracotta transition-colors">
                  privacy@11sari.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
