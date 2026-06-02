import { Movie } from "../../../types/movie"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "../../../components/ui/card"
import Badge from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"

type Props = {
  movie: Movie
}

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500"

// Formatear rating a 3 decimales como en tu diseño
const formatRating = (rating: number) => {
  return rating.toFixed(3)
}

export function MovieCard({ movie }: Props) {
  const poster = movie.poster_path ? `${IMAGE_BASE}${movie.poster_path}` : undefined
  const rating = movie.vote_average ?? 0
  const formattedRating = formatRating(rating)
  
  // Determinar color del badge según rating
  const getRatingColor = (rating: number) => {
    if (rating >= 8) return "from-emerald-500 to-green-400"
    if (rating >= 7) return "from-amber-500 to-yellow-400"
    if (rating >= 6) return "from-orange-500 to-amber-400"
    return "from-zinc-500 to-zinc-400"
  }

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-zinc-900/90 to-zinc-950 backdrop-blur-sm shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] hover:border-white/10">
      
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 via-transparent to-transparent" />
      </div>

      <CardHeader className="relative h-64 w-full overflow-hidden bg-zinc-900 p-0">
        {poster ? (
          <img
            src={poster}
            alt={movie.title}
            className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 text-zinc-400">
            🎬 Sin imagen
          </div>
        )}
        
        {/* Overlay gradiente en la parte inferior de la imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-60" />

        {/* Rating badge - más grande y con glow */}
        <div className="absolute left-3 top-3">
          <div className={`bg-gradient-to-r ${getRatingColor(rating)} rounded-lg px-2.5 py-1 shadow-lg backdrop-blur-sm`}>
            <span className="text-sm font-black text-black tracking-tight">
              ⭐ {formattedRating}
            </span>
          </div>
        </div>

        {/* Año de estreno */}
        <div className="absolute right-3 top-3">
          <div className="rounded-lg bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/10">
            <span className="text-xs font-medium text-white/80">
              {movie.release_date?.split("-")[0] || "Próximo"}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between gap-3 p-5">
        <div className="space-y-2">
          <CardTitle className="line-clamp-1 text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors duration-300">
            {movie.title}
          </CardTitle>
          
          {/* Micro-información */}
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="flex items-center gap-1">🎬 {movie.vote_count?.toLocaleString() || "0"} votos</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span className="flex items-center gap-1">⭐ {rating.toFixed(1)}/10</span>
          </div>
          
          <CardDescription className="line-clamp-3 text-xs leading-relaxed text-zinc-300">
            {movie.overview || "Sin descripción disponible"}
          </CardDescription>
        </div>

        <div className="mt-2 pt-2">
          <Button 
            className="w-full rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-black font-bold text-sm py-5 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300 ease-out border border-white/20" 
            size="default"
          >
            🎟️ Comprar ticket
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default MovieCard