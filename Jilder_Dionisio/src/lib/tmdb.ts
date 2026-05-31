import axios from 'axios'

export const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
export const TMDB_WEB_URL = 'https://www.themoviedb.org/'

const API_KEY = (import.meta.env.VITE_TMDB_API_KEY as string) || ''
const TOKEN = (import.meta.env.VITE_TMDB_TOKEN as string) || ''

export function buildTmdbUrl(path: string, query = '') {
  const base = `${TMDB_BASE_URL}${path}`
  if (query) return `${base}?${query}`
  return base
}

export function posterUrl(path: string | undefined | null) {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : ''
}

export async function fetchFromTmdb(path: string, query = '') {
  const url = buildTmdbUrl(path, query)

  // If a Bearer token is provided, use it (preferred for authenticated calls).
  if (TOKEN) {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    return res.data
  }

  // Fallback to API key in query string for public endpoints
  if (!API_KEY) throw new Error('VITE_TMDB_API_KEY or VITE_TMDB_TOKEN must be defined in environment')
  const sep = url.includes('?') ? '&' : '?'
  const urlWithKey = `${url}${sep}api_key=${API_KEY}`
  const res = await axios.get(urlWithKey)
  return res.data
}
