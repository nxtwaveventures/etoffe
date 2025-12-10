export default function StoriesPage() {
  const weaverStories = [
    {
      title: 'Five Generations of Zari Work',
      location: 'Varanasi, Uttar Pradesh',
      craft: 'Banarasi Zari Weaving',
      excerpt: 'Master weaver Rajan\'s family has been threading gold into silk for 150 years. His great-great-grandfather wove for the Maharajas of Kashi. Today, Rajan weaves for the world — but the loom remains the same.',
      insights: [
        'One Banarasi saree takes 2-6 months to complete',
        'Zari is real gold or silver thread (1-3% precious metal)',
        'Each motif is hand-coded on graph paper before weaving',
        'The kalga (paisley) motif has 47 variations in Varanasi alone'
      ]
    },
    {
      title: 'The Temple Silk Guardian',
      location: 'Kanchipuram, Tamil Nadu',
      craft: 'Kanjivaram Silk',
      excerpt: 'Lakshmi has been weaving Kanjivaram sarees for 35 years. Her specialty: temple borders with peacock and elephant motifs. "Every saree is a prayer," she says. "The silk comes from the temple town. The thread is blessed. The work is meditation."',
      insights: [
        'Kanjivaram silk is tested for purity — it burns to ash, not plastic residue',
        'The thicker the silk, the louder the "rustle" when you drape it',
        'Contrast borders require two weavers working simultaneously',
        'Temple motifs date back to the Chola Dynasty (9th-13th century)'
      ]
    },
    {
      title: 'The Ikat Mathematicians',
      location: 'Patan, Gujarat',
      craft: 'Patola Double Ikat',
      excerpt: 'The Salvi family is one of only three families in India still weaving authentic Patola. They tie-dye warp and weft threads before weaving — a process so precise it requires mathematical calculation for every single thread. One saree: 6-12 months.',
      insights: [
        'Patola sarees are reversible — both sides are identical',
        'Each thread is resist-dyed individually before weaving',
        'Geometric precision requires pre-calculation of 5,000+ intersections',
        'Only natural dyes are used — some recipes are 500+ years old'
      ]
    }
  ]

  const techniqueStories = [
    {
      title: 'The Alchemy of Natural Dyes',
      description: 'Before chemical dyes, weavers extracted colors from nature: indigo from plants, red from insects (lac), yellow from turmeric, black from iron rust. These dyes take longer but age beautifully — growing richer over decades.',
      process: [
        'Indigo dyeing requires 3-7 dips for depth',
        'Turmeric dye needs mordants (alum, iron) to set color',
        'Some red dyes come from cochineal insects',
        'Natural dyes are pH-sensitive and change with water chemistry'
      ]
    },
    {
      title: 'Jacquard vs. Handloom',
      description: 'The Jacquard loom (invented 1804) uses punch cards to automate pattern weaving. But master weavers still prefer handlooms for intricate zari work — they can "feel" the tension, adjust mid-pattern, create irregularities that make each saree unique.',
      process: [
        'Handloom requires two people for complex borders',
        'Jacquard speeds up production but loses tactile control',
        'Some motifs (like kalga) are too intricate for Jacquard',
        'Handloom sarees have slight imperfections — proof of human craft'
      ]
    },
    {
      title: 'The Zari Economy',
      description: 'Real zari (gold/silver thread) vs. imitation (copper coated with gold paint). Real zari is expensive but never tarnishes. Imitation zari oxidizes over time. A high-quality Banarasi saree uses 300-500 grams of zari — costing $100-300 in materials alone.',
      process: [
        'Real zari is 1-3% gold or silver (the rest is silk core)',
        'Test: Burn a thread — real zari leaves ash, fake leaves plastic residue',
        'Zari density determines saree weight and price',
        'Some antique sarees have zari extracted and reused (precious metal recycling)'
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-6 text-center">
            Heritage <span className="text-deep-burgundy">Stories</span>
          </h1>
          <p className="text-xl text-soft-gray text-center mb-16 max-w-3xl mx-auto">
            The people and processes behind India's living textile tradition. No faces needed — the craft speaks for itself.
          </p>

          {/* Weaver Stories */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-10">
              Weaver Lineages
            </h2>
            <div className="space-y-8">
              {weaverStories.map((story, index) => (
                <div key={index} className="card">
                  <div className="mb-4">
                    <h3 className="text-2xl font-heading font-semibold text-charcoal mb-2">
                      {story.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-sage-green">{story.location}</span>
                      <span className="text-soft-gray/50">•</span>
                      <span className="text-soft-gray/80">{story.craft}</span>
                    </div>
                  </div>

                  <p className="text-soft-gray leading-relaxed mb-6">
                    {story.excerpt}
                  </p>

                  <div>
                    <h4 className="text-deep-burgundy text-sm font-semibold mb-3">Craft Insights:</h4>
                    <ul className="space-y-2">
                      {story.insights.map((insight, i) => (
                        <li key={i} className="flex items-start gap-2 text-soft-gray text-sm">
                          <span className="text-sage-green mt-1">→</span>
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technique Stories */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-10">
              Techniques & Traditions
            </h2>
            <div className="space-y-8">
              {techniqueStories.map((story, index) => (
                <div key={index} className="card">
                  <h3 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                    {story.title}
                  </h3>

                  <p className="text-soft-gray leading-relaxed mb-6">
                    {story.description}
                  </p>

                  <div>
                    <h4 className="text-deep-burgundy text-sm font-semibold mb-3">Process Details:</h4>
                    <ul className="space-y-2">
                      {story.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-2 text-soft-gray text-sm">
                          <span className="text-sage-green mt-1">→</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-soft-gray mb-6">
              Want to commission your own story?
            </p>
            <a href="/get-started" className="btn-primary inline-block">
              Start Your Custom Order
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
