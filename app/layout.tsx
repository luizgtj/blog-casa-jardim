import type { Metadata } from 'next'
import { Inter, Roboto_Slab } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import CategoriesBar from '@/components/CategoriesBar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Jardim Inteligente - Guias Práticos de Jardinagem DIY',
    template: '%s | Jardim Inteligente'
  },
  description: 'Guias práticos de jardinagem DIY testados na prática. Aprenda a transformar seu jardim sem gastar fortunas.',
  keywords: ['jardinagem', 'DIY', 'ferramentas', 'horta', 'irrigação', 'plantas'],
  authors: [{ name: 'João Mendes' }],
  creator: 'Jardim Inteligente',
  publisher: 'Jardim Inteligente',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://jardiminteligente.com',
    title: 'Jardim Inteligente - Guias Práticos de Jardinagem DIY',
    description: 'Guias práticos de jardinagem DIY testados na prática.',
    siteName: 'Jardim Inteligente',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jardim Inteligente - Guias Práticos de Jardinagem DIY',
    description: 'Guias práticos de jardinagem DIY testados na prática.',
    creator: '@jardiminteligente',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${robotoSlab.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10b981" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <CategoriesBar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}