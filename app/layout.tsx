import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: "Aishetri's Portfolio",
  description: 'Data Science Student at IIT Madras | Creative Writer | Business Analyst',
  generator: 'aishetri-portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // font loaders must be called in module scope; see const below
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
