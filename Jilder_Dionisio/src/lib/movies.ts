import { posterUrl, TMDB_WEB_URL } from './tmdb'

export type Movie = {
  id: number
  title: string
  releaseDate: string
  posterPath: string
  tmdbId: number
}

export const movies: Movie[] = [
  {
    id: 1,
    title: 'The Matrix',
    releaseDate: '19 de septiembre de 2024',
    posterPath: '/8rT9kG2EYkZpJmYCuTJNnPDEube.jpg',
    tmdbId: 603,
  },
  {
    id: 2,
    title: 'Chand Mera Dil',
    releaseDate: '22 de mayo de 2026',
    posterPath: '/9LPkXJustudEBgPZEm9tgDx5KtC.jpg',
    tmdbId: 1371023,
  },
  {
    id: 3,
    title: 'Backrooms',
    releaseDate: '27 de mayo de 2026',
    posterPath: '/u3CfgxtnZRxbIm8JuVTzt3DXQhg.jpg',
    tmdbId: 1083381,
  },
  {
    id: 4,
    title: 'The Mandalorian and Grogu',
    releaseDate: '21 de mayo de 2026',
    posterPath: '/sWitU9IjgFwf6y1OrI0zUaL3GNa.jpg',
    tmdbId: 1228710,
  },
  {
    id: 5,
    title: 'Mortal Kombat II',
    releaseDate: '7 de mayo de 2026',
    posterPath: '/ivVKHht5jutNGnObn1y5sSDrAXn.jpg',
    tmdbId: 931285,
  },
  {
    id: 6,
    title: 'Kara',
    releaseDate: '30 de abril de 2026',
    posterPath: '/uIrFdMWlJFdc1jPBP9bxeaISCDj.jpg',
    tmdbId: 1433117,
  },
  {
    id: 7,
    title: 'Mortal Kombat',
    releaseDate: '7 de abril de 2021',
    posterPath: '/2acqTZDykiX8U4oDVBIsNcm5O2o.jpg',
    tmdbId: 460465,
  },
  {
    id: 8,
    title: "The Shadow's Edge",
    releaseDate: '26 de febrero de 2026',
    posterPath: '/ftBCLqEhDvgKRcux0fk5TriVhMD.jpg',
    tmdbId: 1419406,
  },
  {
    id: 9,
    title: 'The Devil Wears Prada',
    releaseDate: '29 de junio de 2006',
    posterPath: '/y0FiGt44M7rveQYnYkIO3UttbTP.jpg',
    tmdbId: 350,
  },
  {
    id: 10,
    title: 'Hoppers',
    releaseDate: '5 de marzo de 2026',
    posterPath: '/4Z0E1W7YvQ0aVtgj7KKtktb9ukd.jpg',
    tmdbId: 1327819,
  },
]

export const movieSource = TMDB_WEB_URL

export function getPosterUrl(movie: Movie) {
  return posterUrl(movie.posterPath)
}
