import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Allura } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const allura = Allura({ subsets: ['latin'], weight: '400', variable: '--font-allura' })

export const metadata: Metadata = {
  title: 'San Valentín News - ¿Serás mi Valentín?',
  description: 'Una especial página de periódico para decir "Te Quiero" en el día del amor',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${allura.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=UnifrakturCook:700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
