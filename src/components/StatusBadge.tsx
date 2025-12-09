import React from 'react'
import { getStatusColor } from '@/utils/helpers'
import { CHARACTER_STATUS } from '@/utils/constants'

interface StatusBadgeProps {
  status: 'Alive' | 'Dead' | 'unknown'
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusIcon = () => {
    switch (status) {
      case CHARACTER_STATUS.ALIVE:
        return '🟢'
      case CHARACTER_STATUS.DEAD:
        return '🔴'
      default:
        return '⚫'
    }
  }

  const getStatusText = () => {
    switch (status) {
      case CHARACTER_STATUS.ALIVE:
        return 'Alive'
      case CHARACTER_STATUS.DEAD:
        return 'Dead'
      default:
        return 'Unknown'
    }
  }

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '6px 12px',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: 600,
      backgroundColor: getStatusColor(status),
      color: '#ffffff',
    }}>
      <span style={{ fontSize: '0.75rem' }}>{getStatusIcon()}</span>
      {getStatusText()}
    </span>
  )
}