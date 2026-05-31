import axios from 'axios'

export const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
export const TMDB_WEB_URL = 'https://www.themoviedb.org/'

const API_KEY = (import.meta.env.VITE_TMDB_API_KEY as string) || ''

export function buildTmdbUrl(path: string, query = '') {
  const sep = path.includes('?') ? '&' : '?'
  const q = query ? `&${query}` : ''
  return `${TMDB_BASE_URL}${path}${sep}api_key=${API_KEY}${q}`
}

export function posterUrl(path: string | undefined | null) {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : ''
}

export async function fetchFromTmdb(path: string, query = '') {
  if (!API_KEY) throw new Error('VITE_TMDB_API_KEY is not defined in environment')
  const url = buildTmdbUrl(path, query)
  const res = await axios.get(url)
  return res.data
}
