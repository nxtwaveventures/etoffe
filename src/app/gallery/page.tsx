'use client'

export default function GalleryPage() {
  // Placeholder images - replace with actual saree photos
  const images = [
    { id: 1, src: '/images/saree-1.jpg', alt: 'Banarasi Saree 1' },
    { id: 2, src: '/images/saree-2.jpg', alt: 'Banarasi Saree 2' },
    { id: 3, src: '/images/saree-3.jpg', alt: 'Banarasi Saree 3' },
    { id: 4, src: '/images/saree-4.jpg', alt: 'Banarasi Saree 4' },
    { id: 5, src: '/images/saree-5.jpg', alt: 'Banarasi Saree 5' },
    { id: 6, src: '/images/saree-6.jpg', alt: 'Banarasi Saree 6' },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20 bg-warm-cream">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-6">
              Our <span className="text-soft-terracotta">Collection</span>
            </h1>
            <p className="text-xl text-soft-gray max-w-2xl mx-auto leading-relaxed">
              Authentic Banarasi sarees woven by master artisans in Varanasi.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {images.map((image) => (
              <div 
                key={image.id} 
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-warm-sand shadow-soft hover:shadow-card transition-all duration-300"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="533" viewBox="0 0 400 533"%3E%3Crect fill="%23F4E4C1" width="400" height="533"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="18" fill="%238B2635"%3EAdd Photo Here%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-soft-gray mb-4">
              Interested in a custom saree?
            </p>
            <a href="/get-started" className="btn-primary inline-flex items-center gap-2">
              Start Your Journey
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
