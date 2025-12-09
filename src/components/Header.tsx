'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Home, Tv } from 'lucide-react'

export const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)

  // Cek ukuran layar
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)',
        maxWidth: '1240px',
        zIndex: 50,
      }}
    >
      <div
        style={{
          backgroundColor: 'var(--color-header-bg)',
          backdropFilter: 'blur(12px) saturate(180%)',
          WebkitBackdropFilter: 'blur(12px) saturate(180%)',
          border: '1px solid var(--color-card-border)',
          borderRadius: '20px',
          padding: isMobile ? '12px 16px' : '16px 24px',
          boxShadow: '0 8px 32px var(--color-shadow)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo Section - Hide TEXT saja di mobile */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div
              style={{
                padding: '8px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #97ce4c, #00b5cc)',
                boxShadow: '0 4px 12px rgba(151, 206, 76, 0.3)',
                flexShrink: 0, // Agar tidak mengecil
              }}
            >
              <Tv style={{ 
                width: '24px', 
                height: '24px', 
                color: '#ffffff' 
              }} />
            </div>
            
            {/* Text Container - Hidden di mobile */}
            <div style={{ 
              display: isMobile ? 'none' : 'block',
            }}>
              <h1
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(90deg, #97ce4c, #00b5cc)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  margin: 0,
                }}
              >
                Rick & Morty Explorer
              </h1>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text)',
                  opacity: 0.7,
                  margin: 0,
                }}
              >
                Multiverse Character Database
              </p>
            </div>
          </Link>

          {/* Navigation - TETAP ADA FULL di semua ukuran */}
          <nav style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: isMobile ? '12px' : '16px',
          }}>
            {/* Home Link */}
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobile ? '44px' : 'auto', // Fixed width di mobile
                height: isMobile ? '44px' : 'auto',
                color: 'var(--color-text)',
                textDecoration: 'none',
                fontSize: isMobile ? '0.75rem' : '0.875rem',
                fontWeight: 500,
                padding: isMobile ? '0' : '8px 16px',
                borderRadius: isMobile ? '50%' : '12px',
                transition: 'all 0.2s ease',
                backgroundColor: isMobile ? 'var(--color-filter-bg)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-card-border)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isMobile 
                  ? 'var(--color-filter-bg)' 
                  : 'transparent'
              }}
              title="Home" // Tooltip untuk mobile
            >
              <Home style={{ 
                width: isMobile ? '20px' : '16px', 
                height: isMobile ? '20px' : '16px' 
              }} />
              
              {/* Text untuk desktop */}
              {!isMobile && (
                <span style={{ marginLeft: '8px' }}>
                  Home
                </span>
              )}
            </Link>
            
            {/* Episodes Link */}
            <Link
              href="/episodes"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobile ? '44px' : 'auto',
                height: isMobile ? '44px' : 'auto',
                color: 'var(--color-text)',
                textDecoration: 'none',
                fontSize: isMobile ? '0.75rem' : '0.875rem',
                fontWeight: 500,
                padding: isMobile ? '0' : '8px 16px',
                borderRadius: isMobile ? '50%' : '12px',
                transition: 'all 0.2s ease',
                backgroundColor: isMobile ? 'var(--color-filter-bg)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-card-border)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isMobile 
                  ? 'var(--color-filter-bg)' 
                  : 'transparent'
              }}
              title="Episodes" // Tooltip untuk mobile
            >
              <Tv style={{ 
                width: isMobile ? '20px' : '16px', 
                height: isMobile ? '20px' : '16px' 
              }} />
              
              {/* Text untuk desktop */}
              {!isMobile && (
                <span style={{ marginLeft: '8px' }}>
                  Episodes
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}