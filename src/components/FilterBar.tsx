'use client'

import React from 'react'
import { Filter, X } from 'lucide-react'
import { useCharacters } from '@/hooks/useCharacters'
import { STATUS_OPTIONS, GENDER_OPTIONS, SPECIES_OPTIONS } from '@/utils/constants'

export const FilterBar: React.FC = () => {
  const { filters, setFilters, clearFilters } = useCharacters()

  return (
    <div style={{
      backgroundColor: 'var(--color-filter-bg)',
      borderRadius: '16px',
      boxShadow: '0 20px 25px -5px var(--color-shadow)',
      padding: '24px',
      marginBottom: '32px',
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: '24px' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Filter style={{ width: '20px', height: '20px', color: '#97ce4c' }} />
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            color: 'var(--color-text)',
            margin: 0,
          }}>
            Filters
          </h2>
        </div>
        {(filters.status || filters.gender || filters.species) && (
          <button
            onClick={clearFilters}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.875rem',
              color: '#6b7280',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 8px',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-card-border)'
              e.currentTarget.style.color = '#ef4444'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#6b7280'
            }}
          >
            <X style={{ width: '16px', height: '16px' }} />
            Clear all
          </button>
        )}
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
      }}>
        <div>
          <label style={{ 
            display: 'block', 
            fontSize: '0.875rem', 
            fontWeight: 500,
            color: 'var(--color-text)',
            marginBottom: '8px',
          }}>
            Status
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {STATUS_OPTIONS.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setFilters({ 
                  status: value || undefined 
                })}
                style={{
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                  border: 'none',
                  cursor: 'pointer',
                  ...(filters.status === value || (!value && !filters.status)
                    ? {
                        backgroundColor: '#97ce4c',
                        color: '#ffffff',
                      }
                    : {
                        backgroundColor: 'var(--color-card-border)',
                        color: 'var(--color-text)',
                      }
                  ),
                }}
                onMouseEnter={(e) => {
                  if (!(filters.status === value || (!value && !filters.status))) {
                    e.currentTarget.style.opacity = '0.8'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1'
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label style={{ 
            display: 'block', 
            fontSize: '0.875rem', 
            fontWeight: 500,
            color: 'var(--color-text)',
            marginBottom: '8px',
          }}>
            Gender
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {GENDER_OPTIONS.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setFilters({ 
                  gender: value || undefined 
                })}
                style={{
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                  border: 'none',
                  cursor: 'pointer',
                  ...(filters.gender === value || (!value && !filters.gender)
                    ? {
                        backgroundColor: '#00b5cc',
                        color: '#ffffff',
                      }
                    : {
                        backgroundColor: 'var(--color-card-border)',
                        color: 'var(--color-text)',
                      }
                  ),
                }}
                onMouseEnter={(e) => {
                  if (!(filters.gender === value || (!value && !filters.gender))) {
                    e.currentTarget.style.opacity = '0.8'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1'
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label style={{ 
            display: 'block', 
            fontSize: '0.875rem', 
            fontWeight: 500,
            color: 'var(--color-text)',
            marginBottom: '8px',
          }}>
            Species
          </label>
          <select
            value={filters.species || ''}
            onChange={(e) => setFilters({ 
              species: e.target.value || undefined 
            })}
            style={{
              width: '100%',
              padding: '8px 16px',
              borderRadius: '12px',
              border: '1px solid var(--color-card-border)',
              backgroundColor: 'var(--color-filter-bg)',
              color: 'var(--color-text)',
              fontSize: '0.875rem',
              outline: 'none',
              cursor: 'pointer',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#97ce4c'
              e.target.style.boxShadow = '0 0 0 3px rgba(151, 206, 76, 0.2)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--color-card-border)'
              e.target.style.boxShadow = 'none'
            }}
          >
            {SPECIES_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}