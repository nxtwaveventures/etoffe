export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-6 text-center">
            Get In <span className="text-deep-burgundy">Touch</span>
          </h1>
          <p className="text-xl text-soft-gray text-center mb-16">
            Fill the form below. We'll contact you via WhatsApp or email — whichever you prefer.
          </p>

          {/* Google Form */}
          <div className="card">
            {process.env.NEXT_PUBLIC_GOOGLE_FORM_ID ? (
              <iframe 
                src={`https://docs.google.com/forms/d/e/${process.env.NEXT_PUBLIC_GOOGLE_FORM_ID}/viewform?embedded=true`}
                width="100%" 
                height="800" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="rounded-lg"
              >
                Loading…
              </iframe>
            ) : (
              <div className="text-center py-12">
                <p className="text-soft-gray mb-6">
                  Our contact form is being set up. In the meantime, please reach out via:
                </p>
                <div className="flex flex-col gap-4 items-center">
                  <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Message on WhatsApp
                  </a>
                  <a href="mailto:hello@11sari.com" className="btn-secondary">
                    Send Email
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Response Time */}
          <div className="mt-12 text-center">
            <p className="text-soft-gray text-sm">
              <span className="text-deep-burgundy font-semibold">Response time:</span> We reply within 2-3 days
            </p>
          </div>

          {/* FAQ Link */}
          <div className="mt-8 text-center">
            <p className="text-soft-gray">
              Have a quick question? Check our <a href="/faq" className="text-sage-green hover:underline">FAQ</a> first.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
