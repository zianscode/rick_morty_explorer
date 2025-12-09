import React from 'react'
import { Loader2 } from 'lucide-react'

export const LoadingSpinner: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '400px' 
    }}>
      <Loader2 style={{ 
        width: '48px', 
        height: '48px', 
        color: '#97ce4c', 
        animation: 'spin 1s linear infinite',
        marginBottom: '16px',
      }} />
      <p style={{ 
        color: 'var(--color-text)',
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }}>
        Wubba lubba dub dub! Loading characters...
      </p>
    </div>
  )
}