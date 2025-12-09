import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ThemeToggle } from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rick & Morty Explorer',
  description: 'Explore characters from the Rick and Morty universe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        
        <div style={{ height: '150px' }} /> 

        <main
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1rem 2rem',
            minHeight: 'calc(100vh - 220px)', 
          }}
        >
          {children}
        </main>

        <Footer />

        <ThemeToggle />
      </body>
    </html>
  )
}