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
  title: 'Étoffe — Authentic Indian Sarees for the World',
  description: 'Authentic Banarasi sarees. Direct from Varanasi weavers to global clients. Custom weaving in 2-3 months.',
  keywords: 'authentic banarasi sarees, handloom sarees, varanasi weavers, custom saree, indian sarees, silk sarees',
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
