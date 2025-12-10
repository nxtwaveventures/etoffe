export default function SareeTypesPage() {
  const sareeTypes = [
    {
      name: 'Banarasi',
      region: 'Varanasi, Uttar Pradesh',
      description: 'Opulent silk sarees with intricate zari work. Famous for heavy gold/silver thread embroidery, Mughal-inspired motifs (flowers, foliage, kalga, bel). The most ceremonial Indian saree.',
      characteristics: 'Heavy silk, dense zari, brocade patterns, 2-6 months weaving time',
      occasions: 'Weddings, major festivals, formal ceremonies',
      priceRange: '$$$$ - $$$$$'
    },
    {
      name: 'Kanjivaram',
      region: 'Kanchipuram, Tamil Nadu',
      description: 'Pure mulberry silk with contrasting borders and heavy pallus. Known for temple-inspired motifs (peacocks, elephants, parrots) and vibrant color combinations.',
      characteristics: 'Thick silk, contrast borders, temple motifs, 10-20 days weaving',
      occasions: 'South Indian weddings, festivals, classical dance',
      priceRange: '$$$$ - $$$$$'
    },
    {
      name: 'Chanderi',
      region: 'Chanderi, Madhya Pradesh',
      description: 'Lightweight, sheer sarees with a glossy texture. Blend of silk and cotton. Delicate zari work with traditional buttis (small motifs). Perfect for daily elegance.',
      characteristics: 'Light, breathable, subtle sheen, fine zari, 7-15 days',
      occasions: 'Daywear, office events, intimate gatherings',
      priceRange: '$$ - $$$'
    },
    {
      name: 'Tussar Silk',
      region: 'Jharkhand, Bihar, West Bengal',
      description: 'Wild silk with a natural golden sheen and textured finish. Earthy, organic feel. Often features tribal motifs and hand-painted designs.',
      characteristics: 'Natural texture, golden tone, porous weave, eco-friendly',
      occasions: 'Cultural events, eco-conscious wear, artistic gatherings',
      priceRange: '$$ - $$$'
    },
    {
      name: 'Bandhani (Tie-Dye)',
      region: 'Gujarat, Rajasthan',
      description: 'Vibrant tie-dyed sarees with intricate dot patterns. Made from georgette, chiffon, or silk. Each dot is hand-tied before dyeing — a labor of love.',
      characteristics: 'Colorful, lightweight, dot patterns, 15,000+ ties per saree',
      occasions: 'Festivals, Navratri, celebrations, sangeet ceremonies',
      priceRange: '$$ - $$$$'
    },
    {
      name: 'Patola',
      region: 'Patan, Gujarat',
      description: 'Double ikat silk sarees where both warp and weft threads are resist-dyed before weaving. Geometric patterns, reversible design. One of the most time-intensive sarees.',
      characteristics: 'Double ikat, reversible, geometric precision, 6-12 months weaving',
      occasions: 'Weddings, heritage events, museum-quality occasions',
      priceRange: '$$$$$ - $$$$$$'
    },
    {
      name: 'Paithani',
      region: 'Paithan, Maharashtra',
      description: 'Pure silk with intricate zari borders and pallus featuring peacock and lotus motifs. Rich colors (purple, green, gold). Considered Maharashtra\'s pride.',
      characteristics: 'Rich silk, zari borders, peacock motifs, 1-2 months weaving',
      occasions: 'Maharashtrian weddings, festivals, formal events',
      priceRange: '$$$$ - $$$$$'
    },
    {
      name: 'Chikankari',
      region: 'Lucknow, Uttar Pradesh',
      description: 'Delicate hand-embroidered sarees on cotton, georgette, or chiffon. White-on-white or pastel threadwork. Subtle elegance with floral motifs.',
      characteristics: 'Hand-embroidered, airy, pastel tones, 20-30 days embroidery',
      occasions: 'Summer wear, daytime events, understated elegance',
      priceRange: '$$ - $$$'
    },
    {
      name: 'Baluchari',
      region: 'Bishnupur, West Bengal',
      description: 'Silk sarees with elaborate storytelling pallus depicting mythological scenes. Inspired by temple terracotta art. Each pallu is a narrative tapestry.',
      characteristics: 'Narrative motifs, intricate pallus, rich colors, 15-25 days',
      occasions: 'Cultural events, Durga Puja, intellectual gatherings',
      priceRange: '$$$ - $$$$'
    },
    {
      name: 'Sambalpuri',
      region: 'Sambalpur, Odisha',
      description: 'Handwoven ikat sarees with traditional motifs like shankha (conch), chakra (wheel), and phula (flowers). Earthy tones and tribal aesthetics.',
      characteristics: 'Ikat weaving, tribal motifs, natural dyes, 10-20 days',
      occasions: 'Festivals, cultural events, bohemian elegance',
      priceRange: '$$ - $$$'
    },
    {
      name: 'Kota Doria',
      region: 'Kota, Rajasthan',
      description: 'Ultra-light transparent sarees with a checkered pattern (khat). Made from cotton-silk blend. Perfect for hot climates and daily wear.',
      characteristics: 'Transparent, checkered weave, breathable, 5-10 days',
      occasions: 'Daily wear, summer events, casual elegance',
      priceRange: '$ - $$'
    },
    {
      name: 'Mysore Silk',
      region: 'Mysore, Karnataka',
      description: 'Pure silk sarees known for their soft texture and minimalistic elegance. Often features simple zari borders. Lightweight and comfortable.',
      characteristics: 'Soft silk, lightweight, minimal zari, 7-12 days',
      occasions: 'Daily wear, professional settings, subtle occasions',
      priceRange: '$$ - $$$'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-6 text-center">
            Saree <span className="text-deep-burgundy">Types</span>
          </h1>
          <p className="text-xl text-soft-gray text-center mb-16 max-w-3xl mx-auto">
            India has over 80 saree weaving traditions. Here are 12 foundational styles every saree lover should know.
          </p>

          {/* Saree Cards */}
          <div className="space-y-8">
            {sareeTypes.map((saree, index) => (
              <div key={index} className="card hover:shadow-card transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-3xl font-heading font-bold text-charcoal">
                        {saree.name}
                      </h2>
                      <span className="text-sage-green text-sm font-mono">
                        {saree.region}
                      </span>
                    </div>
                    
                    <p className="text-soft-gray leading-relaxed mb-4">
                      {saree.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      <div>
                        <span className="text-deep-burgundy text-sm font-semibold">Characteristics:</span>
                        <p className="text-soft-gray/80 text-sm">{saree.characteristics}</p>
                      </div>
                      <div>
                        <span className="text-deep-burgundy text-sm font-semibold">Best For:</span>
                        <p className="text-soft-gray/80 text-sm">{saree.occasions}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-pale-gold text-lg">{saree.priceRange}</span>
                      <span className="text-soft-gray/60 text-xs">
                        (Typical range, varies by intricacy)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-soft-gray mb-6">
              Want help choosing the right saree type for your needs?
            </p>
            <a href="/get-started" className="btn-primary inline-block">
              Talk to Our Concierge
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
