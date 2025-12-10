import Link from 'next/link'
import { BookOpen, Palette, Sparkles, Calendar, Heart, Users } from 'lucide-react'

export default function LearnSareesPage() {
  const topics = [
    {
      title: 'Saree Types',
      href: '/learn-sarees/types',
      description: 'Banarasi, Kanjivaram, Chanderi, and 9+ regional weaving traditions. Learn what makes each unique.',
      icon: BookOpen,
      color: 'text-deep-burgundy'
    },
    {
      title: 'Cultural Meaning',
      href: '/learn-sarees/cultural-meaning',
      description: 'Regional traditions, life-cycle rituals, motif symbolism, and modern shifts in saree culture.',
      icon: Heart,
      color: 'text-sage-green'
    },
    {
      title: 'Skin Tone Guide',
      href: '/learn-sarees/skin-tone-guide',
      description: 'Undertones, color matching, and how to choose saree colors that enhance your natural complexion.',
      icon: Palette,
      color: 'text-pale-gold'
    },
    {
      title: 'Color Psychology',
      href: '/learn-sarees/color-psychology',
      description: 'What colors mean in Indian tradition. Red, white, yellow, green — each carries cultural weight.',
      icon: Sparkles,
      color: 'text-deep-burgundy'
    },
    {
      title: 'Nakshatra Sarees',
      href: '/learn-sarees/nakshatra-sarees',
      description: 'Align your saree to your birth star (lunar mansion). Vedic astrology meets textile selection.',
      icon: Users,
      color: 'text-sage-green'
    },
    {
      title: 'Occasions',
      href: '/learn-sarees/occasions',
      description: 'Which saree for weddings? Festivals? Daily wear? Office? Match textile to context.',
      icon: Calendar,
      color: 'text-pale-gold'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-6 text-center">
            Learn <span className="text-deep-burgundy">Sarees</span>
          </h1>
          <p className="text-xl text-soft-gray text-center mb-16 max-w-3xl mx-auto">
            Everything you need to know before buying your first (or fiftieth) saree. Free knowledge. No sales pitch.
          </p>

          {/* Topic Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {topics.map((topic, index) => {
              const IconComponent = topic.icon
              return (
                <Link key={index} href={topic.href}>
                  <div className="card hover:shadow-card transition-all duration-300 h-full cursor-pointer">
                    <IconComponent className={`w-10 h-10 ${topic.color} mb-4`} />
                    <h2 className="text-xl font-heading font-bold text-charcoal mb-3">
                      {topic.title}
                    </h2>
                    <p className="text-soft-gray text-sm leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Why This Exists */}
          <div className="card">
            <h2 className="text-3xl font-heading font-bold text-charcoal mb-6 text-center">
              Why We Built This
            </h2>
            <div className="space-y-4 text-soft-gray leading-relaxed">
              <p>
                Most saree sellers don't educate — they just show you photos and price tags. You're expected to already know what "Banarasi brocade with buttidar pattern" means. Or why one saree costs $100 and another $5,000.
              </p>
              <p>
                <strong className="text-charcoal">This section is our SEO engine</strong> — not to rank on Google (though that's nice), but because <strong className="text-deep-burgundy">saree knowledge should be freely accessible</strong>.
              </p>
              <p>
                We want you to understand weaving techniques, color symbolism, and cultural context <em>before</em> you buy. An informed buyer makes better decisions — and appreciates their saree more deeply.
              </p>
                <p className="text-sage-green font-semibold">
                Read everything here. Then, if you want custom weaving, begin with our <Link href="/get-started" className="underline">Get Started form</Link>.
          </div>
        </div>
      </div>
    </div>
  )
}
