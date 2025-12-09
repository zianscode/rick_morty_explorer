'use client'

import React, { useState, useCallback } from 'react'
import { Sun, Moon } from 'lucide-react'
import { getCurrentTheme, setTheme } from '@/utils/helpers'

export const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const theme = getCurrentTheme()
    return theme === 'dark'
  })

  const toggleTheme = useCallback(() => {
    const newIsDarkMode = !isDarkMode
    setIsDarkMode(newIsDarkMode)
    setTheme(newIsDarkMode)
  }, [isDarkMode])

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 50,
        padding: '12px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-card-bg)',
        border: '1px solid var(--color-card-border)',
        boxShadow: '0 10px 25px var(--color-shadow)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)'
        e.currentTarget.style.boxShadow = '0 15px 30px var(--color-shadow)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 10px 25px var(--color-shadow)'
      }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div style={{ position: 'relative', width: '24px', height: '24px' }}>
        <Sun 
          style={{
            position: 'absolute',
            width: '24px',
            height: '24px',
            color: '#f59e0b',
            transition: 'all 0.5s ease',
            opacity: isDarkMode ? 0 : 1,
            transform: isDarkMode ? 'rotate(-180deg) scale(0)' : 'rotate(0) scale(1)',
          }}
        />
        <Moon 
          style={{
            position: 'absolute',
            width: '24px',
            height: '24px',
            color: '#60a5fa',
            transition: 'all 0.5s ease',
            opacity: isDarkMode ? 1 : 0,
            transform: isDarkMode ? 'rotate(0) scale(1)' : 'rotate(180deg) scale(0)',
          }}
        />
      </div>
    </button>
  )
}