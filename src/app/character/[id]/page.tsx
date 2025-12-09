'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, Tv, Link as LinkIcon } from 'lucide-react'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { ErrorDisplay } from '@/components/ErrorDisplay'
import { StatusBadge } from '@/components/StatusBadge'
import { useCharacterStore } from '@/store/characterStore'

export default function CharacterDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [isMobile, setIsMobile] = useState(false)
  
  const { selectedCharacter, isLoading, error, fetchCharacter } = useCharacterStore()

  useEffect(() => {
    if (id) {
      fetchCharacter(id)
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [id, fetchCharacter])

  if (isLoading) return <LoadingSpinner />
  if (error) return <ErrorDisplay message={error} />
  if (!selectedCharacter) return null

  return (
    <div style={{ 
      maxWidth: '80rem', 
      margin: '0 auto',
      animation: 'fadeIn 0.5s ease-in-out',
    }}>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--color-text)',
          opacity: 0.7,
          textDecoration: 'none',
          marginBottom: '32px',
          fontSize: '0.875rem',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '1'
          e.currentTarget.style.color = '#97ce4c'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0.7'
          e.currentTarget.style.color = 'var(--color-text)'
        }}
      >
        <ArrowLeft style={{ width: '16px', height: '16px' }} />
        Back to Characters
      </Link>

      <div style={{ 
        backgroundColor: 'var(--color-card-bg)',
        borderRadius: '24px', 
        boxShadow: '0 20px 50px var(--color-shadow)',
        overflow: 'hidden',
        border: '1px solid var(--color-card-border)',
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
        }}>
          <div style={{
            position: 'relative',
            height: isMobile ? '400px' : 'auto',
            width: isMobile ? '100%' : '33.333%',
          }}>
            <Image
              src={selectedCharacter.image}
              alt={selectedCharacter.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
              <StatusBadge status={selectedCharacter.status} />
            </div>
          </div>

          <div style={{ 
            padding: '32px',
            width: isMobile ? '100%' : '66.667%',
          }}>
            <h1 style={{ 
              fontSize: isMobile ? '2rem' : '2.5rem', 
              fontWeight: 'bold', 
              color: 'var(--color-text)',
              marginBottom: '24px',
            }}>
              {selectedCharacter.name}
            </h1>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px', 
              marginBottom: '32px' 
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    padding: '8px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(151, 206, 76, 0.1)',
                  }}>
                    <Tv style={{ width: '20px', height: '20px', color: '#97ce4c' }} />
                  </div>
                  <div>
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: 'var(--color-text)',
                      opacity: 0.7,
                      margin: '0 0 4px 0',
                    }}>
                      Species
                    </p>
                    <p style={{ 
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      margin: 0,
                    }}>
                      {selectedCharacter.species}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    padding: '8px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 181, 204, 0.1)',
                  }}>
                    <Calendar style={{ width: '20px', height: '20px', color: '#00b5cc' }} />
                  </div>
                  <div>
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: 'var(--color-text)',
                      opacity: 0.7,
                      margin: '0 0 4px 0',
                    }}>
                      Gender
                    </p>
                    <p style={{ 
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      margin: 0,
                    }}>
                      {selectedCharacter.gender}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    padding: '8px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(177, 156, 217, 0.1)',
                  }}>
                    <MapPin style={{ width: '20px', height: '20px', color: '#b19cd9' }} />
                  </div>
                  <div>
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: 'var(--color-text)',
                      opacity: 0.7,
                      margin: '0 0 4px 0',
                    }}>
                      Origin
                    </p>
                    <p style={{ 
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      margin: 0,
                    }}>
                      {selectedCharacter.origin.name}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    padding: '8px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                  }}>
                    <MapPin style={{ width: '20px', height: '20px', color: '#f59e0b' }} />
                  </div>
                  <div>
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: 'var(--color-text)',
                      opacity: 0.7,
                      margin: '0 0 4px 0',
                    }}>
                      Location
                    </p>
                    <p style={{ 
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      margin: 0,
                    }}>
                      {selectedCharacter.location.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                color: 'var(--color-text)',
                marginBottom: '16px',
              }}>
                Appears in {selectedCharacter.episode.length} Episodes
              </h2>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(auto-fill, minmax(140px, 1fr))' : 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '12px',
              }}>
                {selectedCharacter.episode.slice(0, 6).map((episodeUrl) => {
                  const episodeId = episodeUrl.split('/').pop()
                  return (
                    <Link
                      key={episodeUrl}
                      href={`/episodes?episode=${episodeId}`}
                      style={{
                        display: 'block',
                        padding: '12px',
                        backgroundColor: 'var(--color-filter-bg)',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        border: '1px solid var(--color-card-border)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-card-border)'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-filter-bg)'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <LinkIcon style={{ width: '16px', height: '16px', color: '#97ce4c' }} />
                        <span style={{ 
                          fontWeight: 600,
                          color: 'var(--color-text)',
                          fontSize: '0.875rem',
                        }}>
                          Episode {episodeId}
                        </span>
                      </div>
                      <p style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--color-text)',
                        opacity: 0.7,
                        margin: '4px 0 0 0',
                      }}>
                        Click to view details
                      </p>
                    </Link>
                  )
                })}
                {selectedCharacter.episode.length > 6 && (
                  <div style={{ 
                    padding: '12px',
                    backgroundColor: 'var(--color-filter-bg)',
                    borderRadius: '12px',
                    border: '1px solid var(--color-card-border)',
                  }}>
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: 'var(--color-text)',
                      opacity: 0.7,
                      margin: 0,
                      textAlign: 'center',
                    }}>
                      +{selectedCharacter.episode.length - 6} more episodes
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div style={{ 
              paddingTop: '24px', 
              borderTop: '1px solid var(--color-card-border)',
            }}>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                fontSize: '0.875rem',
              }}>
                <div>
                  <p style={{ 
                    color: 'var(--color-text)',
                    opacity: 0.7,
                    margin: '0 0 4px 0',
                  }}>
                    Created
                  </p>
                  <p style={{ 
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    margin: 0,
                  }}>
                    {new Date(selectedCharacter.created).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p style={{ 
                    color: 'var(--color-text)',
                    opacity: 0.7,
                    margin: '0 0 4px 0',
                  }}>
                    Type
                  </p>
                  <p style={{ 
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    margin: 0,
                  }}>
                    {selectedCharacter.type || 'Unknown'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}