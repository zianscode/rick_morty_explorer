import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Character } from '@/types/character'
import { StatusBadge } from './StatusBadge'
import { Heart } from 'lucide-react'
import { useCharacterStore } from '@/store/characterStore'
import { truncateText, isFavorite } from '@/utils/helpers'

interface CharacterCardProps {
  character: Character
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { favorites, toggleFavorite } = useCharacterStore()
  const isFavoriteCharacter = isFavorite(character.id, favorites)
  const truncatedOrigin = truncateText(character.origin.name, 15)

  return (
    <div style={{
      position: 'relative',
      backgroundColor: 'var(--color-card-bg)',
      borderRadius: '16px',
      boxShadow: '0 10px 25px var(--color-shadow)',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      animation: 'fadeIn 0.5s ease-in-out',
      border: '1px solid var(--color-card-border)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ position: 'relative', height: '200px', width: '100%', overflow: 'hidden' }}>
        <Image
          src={character.image}
          alt={character.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        <button
          onClick={() => toggleFavorite(character)}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            padding: '8px',
            backgroundColor: 'var(--color-card-bg)',
            opacity: '0.9',
            borderRadius: '50%',
            border: '1px solid var(--color-card-border)',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.transform = 'scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.9'
            e.currentTarget.style.transform = 'scale(1)'
          }}
          aria-label={isFavoriteCharacter ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            style={{
              width: '18px',
              height: '18px',
              fill: isFavoriteCharacter ? '#ef4444' : 'transparent',
              color: isFavoriteCharacter ? '#ef4444' : '#9ca3af',
              transition: 'all 0.2s ease',
            }}
          />
        </button>
        
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
          padding: '16px',
        }}>
          <h3 style={{
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '1.125rem',
            margin: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
          }}>
            {character.name}
          </h3>
        </div>
      </div>
      
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          marginBottom: '16px' 
        }}>
          <StatusBadge status={character.status} />
          <span style={{ 
            fontSize: '0.875rem', 
            color: 'var(--color-text)',
            opacity: 0.7,
          }}>
            {character.species}
          </span>
        </div>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '12px', 
          fontSize: '0.875rem',
          marginBottom: '20px',
          flex: 1,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ 
              color: 'var(--color-text)',
              opacity: 0.7,
            }}>Gender:</span>
            <span style={{ 
              fontWeight: 600,
              color: 'var(--color-text)',
            }}>{character.gender}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ 
              color: 'var(--color-text)',
              opacity: 0.7,
            }}>Origin:</span>
            <span style={{ 
              fontWeight: 600,
              color: 'var(--color-text)',
              maxWidth: '60%', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              whiteSpace: 'nowrap',
            }}>
              {truncatedOrigin}
            </span>
          </div>
        </div>

        <Link
          href={`/character/${character.id}`}
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'center',
            padding: '12px 0',
            backgroundColor: '#97ce4c',
            color: '#ffffff',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.875rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            marginTop: 'auto',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#85ba43'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#97ce4c'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          View Details
        </Link>
      </div>
    </div>
  )
}