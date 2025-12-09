import React from 'react'
import { AlertCircle } from 'lucide-react'

interface ErrorDisplayProps {
  message: string
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '400px', 
      padding: '32px' 
    }}>
      <AlertCircle style={{ 
        width: '64px', 
        height: '64px', 
        color: '#ef4444', 
        marginBottom: '16px' 
      }} />
      <h3 style={{ 
        fontSize: '1.25rem', 
        fontWeight: 600, 
        color: 'var(--color-text)', 
        marginBottom: '8px',
      }}>
        Oops! Something went wrong
      </h3>
      <p style={{ 
        color: '#6b7280', 
        textAlign: 'center', 
        marginBottom: '24px',
      }}>
        {message}
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: '8px 24px',
          backgroundColor: '#97ce4c',
          color: '#ffffff',
          borderRadius: '12px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 500,
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.9'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1'
        }}
      >
        Try Again
      </button>
    </div>
  )
}