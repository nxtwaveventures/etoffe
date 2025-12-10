export default function CulturalMeaningPage() {
  const regions = [
    {
      region: 'South India',
      states: 'Tamil Nadu, Karnataka, Kerala, Andhra Pradesh',
      traditions: [
        'Kanjivaram silk sarees are wedding essentials — brides wear them for the ceremony',
        'Temple dancers (Bharatanatyam) wear sarees pleated in a specific dhoti style for movement',
        'Colors signify festivals: yellow for Pongal, red for weddings, white for mourning',
        'Married women wear sarees with sindoor (red powder) and mangalsutra (sacred necklace)'
      ]
    },
    {
      region: 'North India',
      states: 'Uttar Pradesh, Rajasthan, Gujarat, Punjab',
      traditions: [
        'Banarasi sarees are considered sacred — often gifted by mothers to daughters at marriage',
        'Red sarees symbolize Shakti (feminine power) — worn by brides in Hindu weddings',
        'Rajasthani bandhani (tie-dye) sarees are worn during Teej and Gangaur festivals',
        'Widows traditionally wore white sarees (though this is changing)'
      ]
    },
    {
      region: 'East India',
      states: 'West Bengal, Odisha, Assam',
      traditions: [
        'Bengali women wear white sarees with red borders for Durga Puja',
        'Assamese mekhela chador (two-piece saree) is worn during Bihu festival',
        'Baluchari sarees depict Ramayana and Mahabharata scenes — storytelling through cloth',
        'Widows once wore only white, but modern practice varies'
      ]
    },
    {
      region: 'West India',
      states: 'Maharashtra, Goa',
      traditions: [
        'Paithani sarees are family heirlooms — passed down through generations',
        'Maharashtrian nine-yard sarees (Nauvari) allow free movement — worn by working women',
        'Green sarees symbolize Hartalika Teej (a fasting festival for married women)',
        'Konkani Christian brides wear sarees (not gowns) for church weddings'
      ]
    }
  ]

  const lifecycle = [
    {
      occasion: 'Birth & Childhood',
      meaning: 'Baby girls receive their first saree (often a small silk piece) during naming ceremonies. This symbolizes cultural continuity.',
      colors: 'Yellow (auspicious), pink (feminine), gold (prosperity)'
    },
    {
      occasion: 'Coming of Age',
      meaning: 'First saree ceremony (around age 12-16) marks transition to womanhood. Family gifts sarees as blessings.',
      colors: 'Bright hues (red, orange, green) symbolizing youth and vitality'
    },
    {
      occasion: 'Marriage',
      meaning: 'Bridal sarees are the most important garment. Color, motifs, and weaving technique chosen based on regional tradition and family customs.',
      colors: 'Red (North), Gold (South), Green (West), White-red (Bengal)'
    },
    {
      occasion: 'Festivals',
      meaning: 'Each festival has saree associations: Diwali (silk), Durga Puja (white-red), Pongal (yellow), Onam (white-gold kasavu).',
      colors: 'Festival-specific (yellow for harvest, red for Shakti worship, white for purity)'
    },
    {
      occasion: 'Mourning',
      meaning: 'Traditionally, widows wore only white sarees (no color, no borders). Modern practice is more flexible, but white remains mourning color.',
      colors: 'White, off-white, cream (absence of color = absence of celebration)'
    }
  ]

  const symbols = [
    {
      motif: 'Peacock',
      meaning: 'Beauty, pride, immortality. Associated with goddess Saraswati (knowledge). Common in Kanjivaram sarees.',
      regions: 'South India, Maharashtra'
    },
    {
      motif: 'Lotus',
      meaning: 'Purity, spiritual awakening, divine beauty. Associated with goddess Lakshmi (wealth).',
      regions: 'Banarasi, Paithani, temple sarees'
    },
    {
      motif: 'Mango (Paisley/Kalga)',
      meaning: 'Fertility, prosperity, life. The teardrop shape represents seeds and abundance.',
      regions: 'Banarasi, Kashmiri, Jamawar'
    },
    {
      motif: 'Elephant',
      meaning: 'Strength, wisdom, royalty. Associated with Lord Ganesha (remover of obstacles).',
      regions: 'Kanjivaram, temple textiles'
    },
    {
      motif: 'Geometric Patterns',
      meaning: 'Order, precision, cosmic balance. Reflects Vedic cosmology and sacred geometry.',
      regions: 'Patola, Sambalpuri, tribal weaves'
    },
    {
      motif: 'Creepers & Vines (Bel)',
      meaning: 'Growth, continuity, connection. Represents life\'s journey and family lineage.',
      regions: 'Banarasi zari borders'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-6 text-center">
            Cultural <span className="text-deep-burgundy">Meaning</span>
          </h1>
          <p className="text-xl text-soft-gray text-center mb-16 max-w-3xl mx-auto">
            Sarees aren't just clothing. They're identity, ritual, storytelling, and devotion woven into silk.
          </p>

          {/* Regional Traditions */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-10">
              Regional Traditions
            </h2>
            <div className="space-y-8">
              {regions.map((region, index) => (
                <div key={index} className="card">
                  <h3 className="text-2xl font-heading font-semibold text-charcoal mb-2">
                    {region.region}
                  </h3>
                  <p className="text-sage-green text-sm mb-4">{region.states}</p>
                  <ul className="space-y-3">
                    {region.traditions.map((tradition, i) => (
                      <li key={i} className="flex items-start gap-3 text-soft-gray">
                        <span className="text-deep-burgundy mt-1">✦</span>
                        <span>{tradition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Life Cycle */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-10">
              Sarees Through Life
            </h2>
            <div className="space-y-6">
              {lifecycle.map((stage, index) => (
                <div key={index} className="card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold text-sage-green mb-2">
                        {stage.occasion}
                      </h3>
                      <p className="text-soft-gray leading-relaxed mb-3">
                        {stage.meaning}
                      </p>
                      <p className="text-sm text-soft-gray/70">
                        <strong className="text-deep-burgundy">Typical colors:</strong> {stage.colors}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Motif Symbolism */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-10">
              Motif Symbolism
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {symbols.map((symbol, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-heading font-semibold text-charcoal mb-2">
                    {symbol.motif}
                  </h3>
                  <p className="text-soft-gray text-sm leading-relaxed mb-3">
                    {symbol.meaning}
                  </p>
                  <p className="text-sage-green text-xs">
                    Common in: {symbol.regions}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Modern Context */}
          <div className="card mb-12">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
              Modern Shifts
            </h2>
            <div className="space-y-4 text-soft-gray leading-relaxed">
              <p>
                <strong className="text-charcoal">1. Color Liberation:</strong> Younger generations reject "widow = white only" rules. Color is personal choice, not social obligation.
              </p>
              <p>
                <strong className="text-charcoal">2. Regional Fusion:</strong> Bengali brides now wear Kanjivaram. North Indians buy Paithani. Regional boundaries are dissolving.
              </p>
              <p>
                <strong className="text-charcoal">3. Global Reinterpretation:</strong> Non-Indians wearing sarees spark debates about cultural appreciation vs. appropriation. Context matters: Is it respectful study or costume party?
              </p>
              <p>
                <strong className="text-charcoal">4. Sustainable Revival:</strong> Young Indians rediscovering sarees as slow fashion — handwoven, biodegradable, multi-generational heirlooms.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-soft-gray mb-6">
              Want to choose a saree aligned with your own cultural or personal symbolism?
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
