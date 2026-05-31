import { Button } from './button'
import type { Movie } from '../../lib/movies'
import { getPosterUrl } from '../../lib/movies'

type MovieCardProps = {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-slate-200/10 bg-white shadow-sm shadow-slate-200/5 transition hover:-translate-y-1 hover:shadow-lg sm:flex-row">
      <img
        src={getPosterUrl(movie)}
        alt={movie.title}
        className="h-72 w-full object-cover sm:h-auto sm:w-56"
      />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">{movie.title}</h2>
            <p className="text-sm text-slate-500">{movie.releaseYear}</p>
          </div>
          <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">
            TMDB
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-600">{movie.overview}</p>
        <div className="mt-auto flex flex-wrap gap-3">
          <Button variant="primary">Comprar ticket</Button>
          <a
            href={`https://www.themoviedb.org/movie/${movie.tmdbId}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-200"
          >
            Ver en TMDB
          </a>
        </div>
      </div>
    </article>
  )
}

export default MovieCard
