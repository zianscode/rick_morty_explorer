import type { Metadata } from 'next'
import './globals.css'
import { ThemeToggle } from '@/components/ThemeToggle'
import Link from 'next/link'
import { Home, Tv } from 'lucide-react'

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" /> */}
      </head>
      <body style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        <header style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          backgroundColor: 'var(--color-header-bg)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-card-border)',
        }}>
          <div style={{ 
            maxWidth: '1280px', 
            margin: '0 auto', 
            padding: '1rem 1rem' 
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between' 
            }}>
              <Link href="/" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                textDecoration: 'none',
                color: 'inherit',
              }}>
                <div style={{
                  padding: '8px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #97ce4c, #00b5cc)',
                }}>
                  <Tv style={{ width: '24px', height: '24px', color: '#ffffff' }} />
                </div>
                <div>
                  <h1 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    background: 'linear-gradient(90deg, #97ce4c, #00b5cc)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    margin: 0,
                  }}>
                    Rick & Morty Explorer
                  </h1>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    margin: 0,
                  }}>
                    Multiverse Character Database
                  </p>
                </div>
              </Link>
              
              <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <Link 
                  href="/" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                >
                  <Home style={{ width: '16px', height: '16px' }} />
                  Home
                </Link>
                <Link 
                  href="/episodes" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                >
                  <Tv style={{ width: '16px', height: '16px' }} />
                  Episodes
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '2rem 1rem',
          minHeight: '100vh',
        }}>
          {children}
        </main>

        <footer style={{
          borderTop: '1px solid var(--color-card-border)',
          marginTop: '3rem',
        }}>
          <div style={{ 
            maxWidth: '1280px', 
            margin: '0 auto', 
            padding: '2rem 1rem' 
          }}>
            <div style={{ 
              textAlign: 'center', 
              color: '#6b7280',
              fontSize: '0.875rem',
            }}>
              <p>Data provided by the Rick and Morty API</p>
              <p style={{ marginTop: '0.5rem' }}>
                © {new Date().getFullYear()} Rick & Morty Explorer. Not affiliated with Adult Swim.
              </p>
            </div>
          </div>
        </footer>

        <ThemeToggle />
      </body>
    </html>
  )
}