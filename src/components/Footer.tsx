import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-card-border)',
        marginTop: '3rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '2rem 1rem',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            color: '#6b7280',
            fontSize: '0.875rem',
          }}
        >
          <p>Data provided by the Rick and Morty API</p>
          <p style={{ marginTop: '0.5rem' }}>
            © {new Date().getFullYear()} Rick & Morty Explorer. Not affiliated
            with Adult Swim.
          </p>
        </div>
      </div>
    </footer>
  )
}