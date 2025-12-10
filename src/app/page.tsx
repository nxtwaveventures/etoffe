'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Globe, BookOpen, Heart, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-warm-cream overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 text-center max-w-3xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-deep-burgundy mb-6">
            Own an Indian Saree
          </h1>
          
          <p className="text-lg md:text-xl text-soft-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            Fill our form. We curate 3 choices for you. Your saree arrives in 2–3 months. Honest pricing. Serious buyers only.
          </p>

          {/* Quick Reviews in Hero */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl">🇯🇵</span>
              <span className="text-soft-gray italic">"Extraordinary craftsmanship"</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🇩🇪</span>
              <span className="text-soft-gray italic">"Transparent process"</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🇺🇸</span>
              <span className="text-soft-gray italic">"Art, not merchandise"</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="/get-started" className="btn-primary inline-flex items-center gap-2">
              Fill Google Form
              <ArrowRight size={20} />
            </Link>
          </div>

          <p className="text-soft-gray text-xs mb-8">
            We connect with you after form submission
          </p>

          <p className="text-soft-gray text-sm">
            For global enthusiasts who value craft, heritage and thoughtful collaboration.
          </p>
        </motion.div>
      </section>

      {/* Customer Reviews */}
      <section className="section-container bg-warm-sand/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
            What our <span className="text-deep-burgundy">clients say</span>
          </h2>
          <p className="text-soft-gray text-lg max-w-2xl mx-auto">
            Real stories from Japan, Germany, and New York.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Japan Review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <div className="mb-4">
              <span className="text-2xl">🇯🇵</span>
              <span className="ml-2 text-sm text-soft-gray">Tokyo, Japan</span>
            </div>
            <p className="text-soft-gray mb-4 italic">
              "It\'s my first saree. The weaving took time, but the result is beautiful. I love wearing it to special occasions."
            </p>
            <p className="text-xs text-soft-gray/60">— Anonymous Buyer</p>
          </motion.div>

          {/* Germany Review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <div className="mb-4">
              <span className="text-2xl">🇩🇪</span>
              <span className="ml-2 text-sm text-soft-gray">Berlin, Germany</span>
            </div>
            <p className="text-soft-gray mb-4 italic">
              "We love wearing it to functions and parties. The process was transparent and they kept us updated throughout."
            </p>
            <p className="text-xs text-soft-gray/60">— Anonymous Buyer</p>
          </motion.div>

          {/* New York Review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card"
          >
            <div className="mb-4">
              <span className="text-2xl">🇺🇸</span>
              <span className="ml-2 text-sm text-soft-gray">New York, USA</span>
            </div>
            <p className="text-soft-gray mb-4 italic">
              "My first custom saree. We wear it to family gatherings and get so many compliments. Worth the investment."
            </p>
            <p className="text-xs text-soft-gray/60">— Anonymous Buyer</p>
          </motion.div>
        </div>
      </section>


    </div>
  )
}
