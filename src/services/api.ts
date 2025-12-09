import axios from 'axios'
import { buildQueryString, handleApiError } from '@/utils/helpers'

const BASE_URL = 'https://rickandmortyapi.com/api'

export const api = {
  getCharacters: async (params?: Record<string, string>) => {
    try {
      const queryString = buildQueryString(params || {})
      const url = `${BASE_URL}/character${queryString ? `?${queryString}` : ''}`
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      throw new Error(handleApiError(error))
    }
  },

  getCharacter: async (id: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/character/${id}`)
      return response.data
    } catch (error) {
      throw new Error(handleApiError(error))
    }
  },

  getEpisodes: async (params?: Record<string, string>) => {
    try {
      const queryString = buildQueryString(params || {})
      const url = `${BASE_URL}/episode${queryString ? `?${queryString}` : ''}`
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      throw new Error(handleApiError(error))
    }
  },

  getEpisode: async (id: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/episode/${id}`)
      return response.data
    } catch (error) {
      throw new Error(handleApiError(error))
    }
  },
}