import Link from 'next/link'

export default function GlobalGuidesPage() {
  const guides = [
    {
      title: 'First Time Wearing a Saree',
      href: '/global-guides/first-time',
      description: 'Complete beginner's guide: draping, mistakes to avoid, confidence tips. Perfect for absolute first-timers.',
      emoji: '🎯'
    },
    {
      title: 'Gifting Sarees (For Foreigners)',
      href: '/global-guides/gifting',
      description: 'Choosing sarees as gifts: cultural considerations, sizing, etiquette, and presentation tips.',
      emoji: '🎁'
    },
    {
      title: 'Sarees in Japan',
      href: '/global-guides/japan',
      description: 'Styling sarees in Japan: minimalism meets tradition, kimono parallels, Tokyo fashion context.',
      emoji: '🇯🇵'
    },
    {
      title: 'Sarees in the USA',
      href: '/global-guides/usa',
      description: 'Wearing sarees in America: formal events, cultural festivals, climate considerations.',
      emoji: '🇺🇸'
    },
    {
      title: 'Sarees in Europe',
      href: '/global-guides/europe',
      description: 'European saree styling: Paris galas, London weddings, Mediterranean climates.',
      emoji: '🇪🇺'
    },
    {
      title: 'Sarees in the UAE',
      href: '/global-guides/uae',
      description: 'Sarees in Dubai & Abu Dhabi: luxury contexts, modest styling, desert climate adaptations.',
      emoji: '🇦🇪'
    },
    {
      title: 'Sarees in Australia',
      href: '/global-guides/australia',
      description: 'Australian saree guide: beachwear adaptations, summer fabrics, multicultural events.',
      emoji: '🇦🇺'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-6 text-center">
            Global <span className="text-deep-burgundy">Guides</span>
          </h1>
          <p className="text-xl text-soft-gray text-center mb-16 max-w-3xl mx-auto">
            Wearing sarees anywhere in the world. Country-specific styling, cultural context, and practical tips.
          </p>

          {/* Guide Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <Link key={index} href={guide.href}>
                <div className="card hover:shadow-card transition-all duration-300 h-full cursor-pointer">
                  <div className="text-5xl mb-4">{guide.emoji}</div>
                  <h2 className="text-2xl font-heading font-bold text-charcoal mb-3">
                    {guide.title}
                  </h2>
                  <p className="text-soft-gray leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Philosophy */}
          <div className="mt-20 card">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6 text-center">
              Why Global Guides?
            </h2>
            <div className="space-y-4 text-soft-gray leading-relaxed">
              <p>
                Sarees aren't just for Indians. They're 3,000 years of textile sophistication — and they belong to anyone who appreciates craft, draping elegance, and wearable art.
              </p>
              <p>
                But wearing a saree in Tokyo, New York, or Paris requires <strong className="text-charcoal">cultural awareness + practical adaptation</strong>. Different climates, social contexts, and styling norms.
              </p>
              <p>
                These guides help you wear sarees <strong className="text-deep-burgundy">confidently and appropriately</strong> — wherever you are in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
