'use client'

import React from 'react'
import { CharacterCard } from './CharacterCard'
import { LoadingSpinner } from './LoadingSpinner'
import { ErrorDisplay } from './ErrorDisplay'
import { useCharacters } from '@/hooks/useCharacters'

export const CharacterList: React.FC = () => {
  const { characters, isLoading, error } = useCharacters()

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorDisplay message={error} />
  }

  if (characters.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '48px 0',
      }}>
        <div style={{ 
          fontSize: '64px', 
          color: '#9ca3af',
          marginBottom: '16px',
        }}>
          👽
        </div>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 600, 
          color: 'var(--color-text)',
          marginBottom: '8px',
        }}>
          No characters found
        </h3>
        <p style={{ 
          color: '#6b7280',
        }}>
          Try adjusting your search or filters
        </p>
      </div>
    )
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '24px',
    }}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}