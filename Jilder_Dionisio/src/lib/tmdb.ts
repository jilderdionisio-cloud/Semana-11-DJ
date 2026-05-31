export const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
export const TMDB_WEB_URL = 'https://www.themoviedb.org/'

export function buildTmdbUrl(path: string, apiKey = 'YOUR_TMDB_API_KEY') {
  return `${TMDB_BASE_URL}${path}?api_key=${apiKey}`
}

export function posterUrl(path: string) {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : ''
}
