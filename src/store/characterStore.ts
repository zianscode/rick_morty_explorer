import { create } from 'zustand'
import { Character, CharacterResponse, FilterParams } from '@/types/character'
import { api } from '@/services/api'
import { buildQueryString, handleApiError, loadFromStorage, saveToStorage } from '@/utils/helpers'

interface CharacterStore {
  characters: Character[]
  selectedCharacter: Character | null
  favorites: Character[]
  filters: FilterParams
  pagination: {
    currentPage: number
    totalPages: number
    count: number
  }
  isLoading: boolean
  error: string | null
  
  fetchCharacters: (params?: FilterParams) => Promise<void>
  fetchCharacter: (id: string) => Promise<void>
  setFilters: (filters: FilterParams) => void
  toggleFavorite: (character: Character) => void
  clearFilters: () => void
  setPage: (page: number) => void
}

const initialState = {
  characters: [],
  selectedCharacter: null,
  favorites: loadFromStorage<Character[]>('favorites', []),
  filters: {},
  pagination: {
    currentPage: 1,
    totalPages: 0,
    count: 0,
  },
  isLoading: false,
  error: null,
}

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  ...initialState,

  fetchCharacters: async (params = {}) => {
    set({ isLoading: true, error: null })
    try {
      const queryString = buildQueryString(params)
      const url = `https://rickandmortyapi.com/api/character${queryString ? `?${queryString}` : ''}`
      
      const response = await fetch(url)
      const data: CharacterResponse = await response.json()
      
      set({
        characters: data.results,
        pagination: {
          currentPage: params.page || 1,
          totalPages: data.info.pages || 0,
          count: data.info.count || 0,
        },
        isLoading: false,
      })
    } catch (error) {
      const errorMessage = handleApiError(error)
      set({ 
        error: errorMessage, 
        isLoading: false 
      })
    }
  },

  fetchCharacter: async (id: string) => {
    set({ isLoading: true, error: null })
    try {
      const character = await api.getCharacter(id)
      set({ selectedCharacter: character, isLoading: false })
    } catch (error) {
      const errorMessage = handleApiError(error)
      set({ 
        error: errorMessage, 
        isLoading: false 
      })
    }
  },

  setFilters: (filters) => {
    const currentFilters = get().filters
    const newFilters = { ...currentFilters, ...filters, page: 1 }
    
    set({ 
      filters: newFilters,
      pagination: {
        ...get().pagination,
        currentPage: 1
      }
    })
    
    get().fetchCharacters(newFilters)
  },

  toggleFavorite: (character) => {
    set((state) => {
      const isFavorite = state.favorites.some(fav => fav.id === character.id)
      const favorites = isFavorite
        ? state.favorites.filter(fav => fav.id !== character.id)
        : [...state.favorites, character]
      
      saveToStorage('favorites', favorites)
      
      return { favorites }
    })
  },

  clearFilters: () => {
    set({ 
      filters: {},
      pagination: {
        ...get().pagination,
        currentPage: 1
      }
    })
    get().fetchCharacters({ page: 1 })
  },

  setPage: (page) => {
    const currentFilters = get().filters
    const newFilters = { ...currentFilters, page }
    
    set({ 
      filters: newFilters,
      pagination: {
        ...get().pagination,
        currentPage: page
      }
    })
    get().fetchCharacters(newFilters)
  },
}))