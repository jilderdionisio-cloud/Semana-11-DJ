import type { Movie } from '../../lib/movies'
import { getPosterUrl } from '../../lib/movies'

type MovieCardProps = {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="h-[386px] w-[207px] overflow-hidden rounded-md border border-[#ddd] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.16)]">
      <div className="relative h-[282px] w-full overflow-hidden bg-neutral-100">
        <img
          src={getPosterUrl(movie)}
          alt={movie.title}
          className="h-full w-full object-cover"
        />
        <button
          type="button"
          aria-label={`Opciones de ${movie.title}`}
          className="absolute right-[12px] top-[12px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#d9d9d9] text-[18px] font-bold leading-none text-[#555]"
        >
          <span className="-mt-[5px]">...</span>
        </button>
      </div>

      <div className="h-[104px] px-[14px] py-[11px]">
        <h2 className="text-[16px] font-bold leading-[24px] text-black">{movie.title}</h2>
        <p className="mt-[2px] text-[16px] leading-[24px] text-black">{movie.releaseDate}</p>
      </div>
    </article>
  )
}

export default MovieCard
