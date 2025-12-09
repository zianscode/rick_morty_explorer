import React from 'react'
import { Episode } from '@/types/character'
import { Calendar, Users, Tv } from 'lucide-react'

interface EpisodeCardProps {
  episode: Episode
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <div style={{
      backgroundColor: 'var(--color-card-bg)',
      borderRadius: '16px',
      boxShadow: '0 10px 25px -5px var(--color-shadow)',
      padding: '24px',
      transition: 'all 0.3s ease',
      border: '1px solid var(--color-card-border)',
      animation: 'fadeIn 0.5s ease-in-out',
      height: '100%',
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        justifyContent: 'space-between', 
        marginBottom: '20px' 
      }}>
        <div>
          <span style={{
            display: 'inline-block',
            padding: '4px 12px',
            backgroundColor: 'rgba(151, 206, 76, 0.1)',
            color: '#97ce4c',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 600,
            marginBottom: '12px',
          }}>
            {episode.episode}
          </span>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'var(--color-text)',
            margin: 0,
            lineHeight: '1.4',
          }}>
            {episode.name}
          </h3>
        </div>
        <Tv style={{ 
          width: '24px', 
          height: '24px', 
          color: '#97ce4c',
          flexShrink: 0,
        }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            padding: '8px',
            borderRadius: '12px',
            backgroundColor: 'rgba(0, 181, 204, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Calendar style={{ 
              width: '20px', 
              height: '20px', 
              color: '#00b5cc' 
            }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ 
              fontSize: '0.875rem', 
              color: 'var(--color-text)',
              opacity: 0.7,
              margin: '0 0 4px 0',
            }}>
              Air Date
            </p>
            <p style={{ 
              fontWeight: 600,
              color: 'var(--color-text)',
              margin: 0,
            }}>
              {episode.air_date}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            padding: '8px',
            borderRadius: '12px',
            backgroundColor: 'rgba(177, 156, 217, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Users style={{ 
              width: '20px', 
              height: '20px', 
              color: '#b19cd9' 
            }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ 
              fontSize: '0.875rem', 
              color: 'var(--color-text)',
              opacity: 0.7,
              margin: '0 0 4px 0',
            }}>
              Characters
            </p>
            <p style={{ 
              fontWeight: 600,
              color: 'var(--color-text)',
              margin: 0,
            }}>
              {episode.characters.length} characters
            </p>
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: '24px',
        paddingTop: '20px',
        borderTop: '1px solid var(--color-card-border)',
      }}>
        <p style={{ 
          fontSize: '0.75rem', 
          color: 'var(--color-text)',
          opacity: 0.6,
          margin: 0,
          lineHeight: '1.6',
        }}>
          Episode ID: {episode.id} • Created: {new Date(episode.created).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}