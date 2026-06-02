export interface Movie {
  id: number
  title: string
  overview: string
  poster_path?: string | null
  release_date?: string | null
  vote_average?: number
}

export interface TmdbResponse {
  page: number
  results: Movie[]
  total_results: number
  total_pages: number
}

export type { Movie as MovieType };
