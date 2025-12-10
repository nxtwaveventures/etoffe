import type { Metadata } from 'next'
import { Inter, Crimson_Pro, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '11 Sari — Clarity that unlocks your hidden wealth',
  description: 'Global saree concierge service. Varanasi weaving network. Custom 3-4 month weaving process. Introducing Indian sarees to the world.',
  keywords: 'handloom sarees, bespoke saree, weaving traditions, Varanasi sarees, custom saree service, global saree guide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-warm-cream text-charcoal font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
