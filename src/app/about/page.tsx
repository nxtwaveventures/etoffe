export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-6 text-center">
            About <span className="text-deep-burgundy">Étoffe</span>
          </h1>
          <p className="text-xl text-soft-gray text-center mb-16">
            We choose your saree together. Varanasi weaving network. Global education.
          </p>

          {/* Our Vision */}
          <div className="card">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
              Our Vision
            </h2>
            <div className="space-y-4 text-soft-gray leading-relaxed">
              <p>
                We want to help people have access to <strong className="text-charcoal">authentic Banarasi sarees</strong> irrespective of any place in the world they belong to.
              </p>
              <p>
                We ship everywhere — from India to every country across the globe. Our vision is simple: <strong className="text-deep-burgundy">every person should experience this art</strong>.
              </p>
              <p>
                A six-yard fabric. Wrap it your way. That's the beauty of a saree.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
