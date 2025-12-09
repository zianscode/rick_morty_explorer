'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

type Theme = 'light' | 'dark' | 'system'

const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    return savedTheme || 'system'
  }
  return 'system'
}

const applyTheme = (theme: Theme) => {
  if (typeof window === 'undefined') return

  const actualTheme = theme === 'system' ? getSystemTheme() : theme
  
  if (actualTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export const ThemeToggle: React.FC = () => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  const handleThemeChange = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
    setShowMenu(false)
  }, [])

  const getCurrentIcon = () => {
    if (theme === 'system') {
      return <Monitor style={{ width: '24px', height: '24px', color: '#9333ea' }} />
    }
    if (theme === 'dark') {
      return <Moon style={{ width: '24px', height: '24px', color: '#60a5fa' }} />
    }
    return <Sun style={{ width: '24px', height: '24px', color: '#f59e0b' }} />
  }

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 50 }}>
   
      {showMenu && (
        <div
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '0',
            backgroundColor: 'var(--color-card-bg)',
            border: '1px solid var(--color-card-border)',
            borderRadius: '16px',
            boxShadow: '0 10px 25px var(--color-shadow)',
            padding: '8px',
            minWidth: '160px',
            animation: 'slideUp 0.2s ease',
          }}
        >
          <button
            onClick={() => handleThemeChange('light')}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              backgroundColor: theme === 'light' ? 'var(--color-filter-bg)' : 'transparent',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              color: 'var(--color-text)',
            }}
            onMouseEnter={(e) => {
              if (theme !== 'light') {
                e.currentTarget.style.backgroundColor = 'var(--color-filter-bg)'
              }
            }}
            onMouseLeave={(e) => {
              if (theme !== 'light') {
                e.currentTarget.style.backgroundColor = 'transparent'
              }
            }}
          >
            <Sun style={{ width: '20px', height: '20px', color: '#f59e0b' }} />
            <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Light</span>
          </button>

          <button
            onClick={() => handleThemeChange('dark')}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              backgroundColor: theme === 'dark' ? 'var(--color-filter-bg)' : 'transparent',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              color: 'var(--color-text)',
            }}
            onMouseEnter={(e) => {
              if (theme !== 'dark') {
                e.currentTarget.style.backgroundColor = 'var(--color-filter-bg)'
              }
            }}
            onMouseLeave={(e) => {
              if (theme !== 'dark') {
                e.currentTarget.style.backgroundColor = 'transparent'
              }
            }}
          >
            <Moon style={{ width: '20px', height: '20px', color: '#60a5fa' }} />
            <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Dark</span>
          </button>

          <button
            onClick={() => handleThemeChange('system')}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              backgroundColor: theme === 'system' ? 'var(--color-filter-bg)' : 'transparent',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              color: 'var(--color-text)',
            }}
            onMouseEnter={(e) => {
              if (theme !== 'system') {
                e.currentTarget.style.backgroundColor = 'var(--color-filter-bg)'
              }
            }}
            onMouseLeave={(e) => {
              if (theme !== 'system') {
                e.currentTarget.style.backgroundColor = 'transparent'
              }
            }}
          >
            <Monitor style={{ width: '20px', height: '20px', color: '#9333ea' }} />
            <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>System</span>
          </button>
        </div>
      )}

      <button
        onClick={() => setShowMenu(!showMenu)}
        style={{
          padding: '12px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-card-bg)',
          border: '1px solid var(--color-card-border)',
          boxShadow: '0 10px 25px var(--color-shadow)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'
          e.currentTarget.style.boxShadow = '0 15px 30px var(--color-shadow)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 10px 25px var(--color-shadow)'
        }}
        aria-label="Toggle theme"
        title="Change theme"
      >
        {getCurrentIcon()}
      </button>

      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: -1,
          }}
        />
      )}
    </div>
  )
}