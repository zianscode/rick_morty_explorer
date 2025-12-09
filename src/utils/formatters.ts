import { Episode } from '@/types/character'
import { formatDate } from './helpers'

export const formatEpisode = (episode: Episode): string => {
  return `${episode.episode} - ${episode.name}`
}

export const formatCharacterLocation = (location: string): string => {
  if (!location) return 'Unknown'
  
  const commonLocations = [
    'Earth',
    'Citadel of Ricks',
    'Dimension',
    'Planet',
    'Space'
  ]
  
  if (location.length <= 25) return location
  
  for (const common of commonLocations) {
    if (location.includes(common)) {
      const parts = location.split(common)
      return `${common}${parts[1] ? ` (${parts[1].trim()})` : ''}`
    }
  }
  
  return location.substring(0, 25) + '...'
}

export const formatEpisodeCount = (count: number): string => {
  if (count === 0) return 'No episodes'
  if (count === 1) return '1 episode'
  return `${count} episodes`
}

export const formatDateRange = (startDate: string, endDate?: string): string => {
  const start = formatDate(startDate)
  if (!endDate) return `Since ${start}`
  
  const end = formatDate(endDate)
  return `${start} - ${end}`
}

export const formatCharacterType = (type: string): string => {
  if (!type || type.trim() === '') return 'Normal'
  
  const formatted = type
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
  
  return formatted
}

export const formatGenderWithEmoji = (gender: string): string => {
  switch (gender.toLowerCase()) {
    case 'male':
      return '👨 Male'
    case 'female':
      return '👩 Female'
    case 'genderless':
      return '⚪ Genderless'
    default:
      return '❓ Unknown'
  }
}