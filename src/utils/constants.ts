export const APP_CONFIG = {
  APP_NAME: 'Rick & Morty Explorer',
  APP_DESCRIPTION: 'Explore characters from the Rick and Morty universe',
  API_BASE_URL: 'https://rickandmortyapi.com/api' as const,
  DEFAULT_PAGE_SIZE: 20,
  MAX_FAVORITES: 50,
} as const

export const STATUS_OPTIONS = [
  { value: '', label: 'All Status' },
  { value: 'alive', label: 'Alive' },
  { value: 'dead', label: 'Dead' },
  { value: 'unknown', label: 'Unknown' },
] as const

export const GENDER_OPTIONS = [
  { value: '', label: 'All Genders' },
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'genderless', label: 'Genderless' },
  { value: 'unknown', label: 'Unknown' },
] as const

export const SPECIES_OPTIONS = [
  { value: '', label: 'All Species' },
  { value: 'human', label: 'Human' },
  { value: 'alien', label: 'Alien' },
  { value: 'humanoid', label: 'Humanoid' },
  { value: 'robot', label: 'Robot' },
  { value: 'animal', label: 'Animal' },
  { value: 'mythological', label: 'Mythological' },
  { value: 'disease', label: 'Disease' },
  { value: 'cronenberg', label: 'Cronenberg' },
  { value: 'poopybutthole', label: 'Poopybutthole' },
  { value: 'unknown', label: 'Unknown' },
] as const

export const THEME_COLORS = {
  RICK_BLUE: '#97ce4c',
  RICK_GREEN: '#00b5cc',
  RICK_PURPLE: '#b19cd9',
  STATUS_ALIVE: '#10b981',
  STATUS_DEAD: '#ef4444',
  STATUS_UNKNOWN: '#6b7280',
} as const

export const STORAGE_KEYS = {
  FAVORITES: 'rick-morty-favorites',
  THEME: 'darkMode',
  FILTERS: 'rick-morty-filters',
} as const

export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE_DESKTOP: 1280,
} as const

export const ANIMATION_DURATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const

export const CHARACTER_STATUS = {
  ALIVE: 'Alive',
  DEAD: 'Dead',
  UNKNOWN: 'unknown',
} as const

export const CHARACTER_GENDER = {
  FEMALE: 'Female',
  MALE: 'Male',
  GENDERLESS: 'Genderless',
  UNKNOWN: 'unknown',
} as const

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  NOT_FOUND: 'Character not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  UNKNOWN_ERROR: 'An unknown error occurred.',
} as const

export const SUCCESS_MESSAGES = {
  ADDED_TO_FAVORITES: 'Added to favorites!',
  REMOVED_FROM_FAVORITES: 'Removed from favorites.',
  FILTERS_CLEARED: 'Filters cleared successfully.',
} as const

export const LOADING_MESSAGES = [
  'Wubba lubba dub dub! Loading characters...',
  'Traveling through dimensions...',
  'Searching the multiverse...',
  'Getting schwifty...',
  'Pickle Rick! Loading...',
] as const