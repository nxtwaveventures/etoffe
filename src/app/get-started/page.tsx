export default function GetStartedPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-warm-cream">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-6">
              Begin Your <span className="text-soft-terracotta">Saree Journey</span>
            </h1>
            <p className="text-xl text-soft-gray max-w-2xl mx-auto leading-relaxed">
              We work with 5–10 serious clients per quarter. Fill this consultation form to see if we're aligned.
            </p>
          </div>

          {/* Expectations */}
          <div className="card mb-12">
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-4">
              What to Expect
            </h2>
            <div className="space-y-3 text-soft-gray">
              <p>✓ This is <strong className="text-charcoal">not fast fashion</strong>. Custom weaving takes 2–3 months.</p>
              <p>✓ Honest pricing discussed after understanding your preferences.</p>
              <p>✓ We ask detailed questions about your preferences and occasions.</p>
              <p>✓ We'll review your submission and respond within <strong className="text-charcoal">2-3 days</strong>.</p>
            </div>
          </div>

          {/* Google Form */}
          <div className="card">
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-6 text-center">
              Consultation Form
            </h2>

            {process.env.NEXT_PUBLIC_GOOGLE_FORM_ID ? (
              <iframe 
                src={`https://docs.google.com/forms/d/e/${process.env.NEXT_PUBLIC_GOOGLE_FORM_ID}/viewform?embedded=true`}
                width="100%" 
                height="1200" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="rounded-xl"
              >
                Loading…
              </iframe>
            ) : (
              <div className="text-center py-12">
                <p className="text-soft-gray mb-6">
                  Our consultation form is being finalized. In the meantime, reach out directly:
                </p>
                <div className="flex flex-col gap-4 items-center">
                  <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    WhatsApp Consultation
                  </a>
                  <a href="mailto:hello@11sari.com" className="btn-secondary">
                    Email Us
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* What Happens Next */}
          <div className="mt-16 card">
            <h2 className="text-2xl font-heading font-semibold text-charcoal mb-8 text-center">
              What Happens After You Submit
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-soft-terracotta text-warm-cream rounded-full flex items-center justify-center font-heading font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-charcoal mb-1">Review (48 hours)</h3>
                  <p className="text-sm text-soft-gray">We read every submission carefully and assess alignment.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-soft-terracotta text-warm-cream rounded-full flex items-center justify-center font-heading font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-charcoal mb-1">Initial Consultation</h3>
                  <p className="text-sm text-soft-gray">If we're a match, we schedule a 1-2 hour video/phone call.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-soft-terracotta text-warm-cream rounded-full flex items-center justify-center font-heading font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-charcoal mb-1">Design Collaboration</h3>
                  <p className="text-sm text-soft-gray">We research weavers, refine design, and choose silk quality together.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-soft-terracotta text-warm-cream rounded-full flex items-center justify-center font-heading font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-charcoal mb-1">Weaving Begins</h3>
                  <p className="text-sm text-soft-gray">3-4 months of craftsmanship. We send progress photos every 2-3 weeks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-12 text-center">
            <p className="text-soft-gray text-sm">
              Have questions before filling the form? Check our <a href="/faq" className="text-soft-terracotta hover:underline">FAQ</a> or <a href="/contact" className="text-soft-terracotta hover:underline">contact us</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
