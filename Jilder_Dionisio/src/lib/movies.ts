import { posterUrl, TMDB_WEB_URL } from './tmdb'

export type Movie = {
  id: number
  title: string
  releaseYear: string
  overview: string
  posterPath: string
  tmdbId: number
}

export const movies: Movie[] = [
  {
    id: 1,
    title: 'Inception',
    releaseYear: '2010',
    overview: 'Un ladrón que roba secretos a través de la tecnología de sueños es buscado para realizar un último trabajo.',
    posterPath: '/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
    tmdbId: 27205,
  },
  {
    id: 2,
    title: 'The Matrix',
    releaseYear: '1999',
    overview: 'Un programador descubre que su mundo es una simulación y se une a la resistencia para liberarse.',
    posterPath: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    tmdbId: 603,
  },
  {
    id: 3,
    title: 'Interstellar',
    releaseYear: '2014',
    overview: 'Un equipo de exploradores utiliza un agujero de gusano para superar las limitaciones humanas y viajar por el cosmos.',
    posterPath: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    tmdbId: 157336,
  },
]

export const movieSource = TMDB_WEB_URL

export function getPosterUrl(movie: Movie) {
  return posterUrl(movie.posterPath)
}
