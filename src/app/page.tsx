'use client'

import { SearchBar } from '@/components/SearchBar'
import { FilterBar } from '@/components/FilterBar'
import { CharacterList } from '@/components/CharacterList'
import { Pagination } from '@/components/Pagination'
import { Users } from 'lucide-react'
import { useEffect } from 'react'
import { useCharacterStore } from '@/store/characterStore'

export default function Home() {
  const { pagination, fetchCharacters } = useCharacterStore()

  useEffect(() => {
    fetchCharacters()
  }, [fetchCharacters])

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
 
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '48px',
      }}>
        <div style={{ 
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #97ce4c, #00b5cc)',
          marginBottom: '24px',
        }}>
          <Users style={{ width: '40px', height: '40px', color: '#ffffff' }} />
        </div>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: 'var(--color-text)',
          marginBottom: '16px',
        }}>
          Explore the <span style={{ color: '#97ce4c' }}>Rick and Morty</span> Universe
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          color: 'var(--color-text)',
          opacity: 0.8,
          maxWidth: '42rem', 
          margin: '0 auto',
        }}>
          Discover characters from across the multiverse. Search, filter, and save your favorites!
        </p>
      </div>

      <SearchBar />

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '24px', 
        marginBottom: '32px' 
      }}>
        <div style={{ 
          backgroundColor: 'var(--color-stat-bg)',
          borderRadius: '16px', 
          padding: '24px',
          textAlign: 'center',
        }}>
          <div style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: '#97ce4c',
            marginBottom: '8px',
          }}>
            {pagination.count.toLocaleString()}
          </div>
          <div style={{ 
            color: 'var(--color-stat-text)',
            fontSize: '0.875rem',
          }}>Total Characters</div>
        </div>
        <div style={{ 
          backgroundColor: 'var(--color-stat-bg)',
          borderRadius: '16px', 
          padding: '24px',
          textAlign: 'center',
        }}>
          <div style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: '#00b5cc',
            marginBottom: '8px',
          }}>
            {pagination.totalPages}
          </div>
          <div style={{ 
            color: 'var(--color-stat-text)',
            fontSize: '0.875rem',
          }}>Total Pages</div>
        </div>
        <div style={{ 
          backgroundColor: 'var(--color-stat-bg)',
          borderRadius: '16px', 
          padding: '24px',
          textAlign: 'center',
        }}>
          <div style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: '#b19cd9',
            marginBottom: '8px',
          }}>
            42
          </div>
          <div style={{ 
            color: 'var(--color-stat-text)',
            fontSize: '0.875rem',
          }}>Dimensions</div>
        </div>
      </div>
      <FilterBar />

      <CharacterList />

      <Pagination />
    </div>
  )
}