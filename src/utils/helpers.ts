import { Character } from '@/types/character'

// ========== DEBOUNCE ==========
export const debounce = <T extends (...args: string[]) => string>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// ========== FORMATTING ==========
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return dateString
  }
}

export const truncateText = (text: string, maxLength: number): string => {
  if (!text || text.length <= maxLength) return text || ''
  return text.substring(0, maxLength).trim() + '...'
}

export const capitalize = (str: string): string => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US')
}

// ========== CHARACTER HELPERS ==========
export const getEpisodeNumber = (episodeUrl: string): string => {
  if (!episodeUrl) return 'N/A'
  const parts = episodeUrl.split('/')
  return parts[parts.length - 1] || 'N/A'
}

export const extractIdFromUrl = (url: string): number => {
  if (!url) return 0
  const parts = url.split('/')
  const id = parseInt(parts[parts.length - 1], 10)
  return isNaN(id) ? 0 : id
}

export const getStatusColor = (status: string): string => {
  switch (status?.toLowerCase()) {
    case 'alive':
      return '#10b981'
    case 'dead':
      return '#ef4444'
    default:
      return '#6b7280'
  }
}

export const isFavorite = (characterId: number, favorites: Character[]): boolean => {
  return favorites?.some(fav => fav.id === characterId) || false
}

// ========== STORAGE HELPERS ==========
export const saveToStorage = <T>(key: string, data: T): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error(`Error saving to localStorage (${key}):`, error)
    }
  }
}

export const loadFromStorage = <T>(key: string, defaultValue: T): T => {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(key)
      return saved ? JSON.parse(saved) as T : defaultValue
    } catch (error) {
      console.error(`Error loading from localStorage (${key}):`, error)
      return defaultValue
    }
  }
  return defaultValue
}

export const getCurrentTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    try {
      const savedTheme = localStorage.getItem('darkMode')
      if (savedTheme !== null) {
        return savedTheme === 'true' ? 'dark' : 'light'
      }
      
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return prefersDark ? 'dark' : 'light'
    } catch (error) {
      console.error('Error getting theme:', error)
    }
  }
  return 'light'
}

export const setTheme = (isDark: boolean): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('darkMode', isDark.toString())
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } catch (error) {
      console.error('Error setting theme:', error)
    }
  }
}

// ========== API HELPERS ==========
export const buildQueryString = (params: Record<string, string | number | undefined>): string => {
  const queryParams = new URLSearchParams()
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      queryParams.append(key, String(value))
    }
  })
  
  return queryParams.toString()
}

interface ApiError extends Error {
  response?: {
    status: number
    data?: {
      error?: string
    }
  }
  request?: XMLHttpRequest
}

export const handleApiError = (error: unknown): string => {
  if (typeof error === 'object' && error !== null) {
    const apiError = error as ApiError
    
    if (apiError.response) {
      return `API Error: ${apiError.response.status} - ${apiError.response.data?.error || 'Unknown error'}`
    } else if (apiError.request) {
      return 'Network error: No response received from server'
    } else if (apiError.message) {
      return `Error: ${apiError.message}`
    }
  }
  
  return 'An unknown error occurred'
}

// ========== VALIDATION HELPERS ==========
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const isValidImageUrl = (url: string): boolean => {
  if (!isValidUrl(url)) return false
  
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
  return imageExtensions.some(ext => url.toLowerCase().includes(ext))
}

export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value.trim() === ''
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}

// ========== DOM HELPERS ==========
export const addClassToElement = (selector: string, className: string): void => {
  if (typeof window !== 'undefined') {
    const element = document.querySelector(selector)
    if (element) {
      element.classList.add(className)
    }
  }
}

export const removeClassFromElement = (selector: string, className: string): void => {
  if (typeof window !== 'undefined') {
    const element = document.querySelector(selector)
    if (element) {
      element.classList.remove(className)
    }
  }
}