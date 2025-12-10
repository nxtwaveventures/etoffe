import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-warm-sand border-t border-pale-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-deep-burgundy mb-2">
              11 Sari
            </h3>
            <p className="text-soft-gray text-sm">
              Clarity that unlocks your hidden wealth.
            </p>
            <p className="text-soft-gray/60 text-xs mt-4">
              Varanasi weaving network.<br />
              Introducing Indian sarees to the world.
            </p>
          </div>

          {/* Utility Links */}
          <div>
            <h4 className="font-heading font-semibold text-charcoal mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-soft-gray hover:text-soft-terracotta transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/about" className="text-soft-gray hover:text-soft-terracotta transition-colors text-sm">About</Link></li>
              <li><Link href="/contact" className="text-soft-gray hover:text-soft-terracotta transition-colors text-sm">Contact</Link></li>
              <li><Link href="/privacy" className="text-soft-gray hover:text-soft-terracotta transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold text-charcoal mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-soft-gray hover:text-soft-terracotta transition-colors text-sm">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@11sari.com" className="text-soft-gray hover:text-soft-terracotta transition-colors text-sm">
                  Email
                </a>
              </li>
              <li>
                <a href="https://instagram.com/11sari" target="_blank" rel="noopener noreferrer" className="text-soft-gray hover:text-soft-terracotta transition-colors text-sm">
                  Instagram
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <span className="text-xs text-soft-gray/60">Secure payments via PayPal</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-pale-gold/20">
          <p className="text-center text-soft-gray text-sm">
            © {currentYear} 11 Sari. All rights reserved.<br />
            <span className="text-xs text-soft-gray/60">GDPR & GST compliant. We respect your privacy and never share buyer information.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
