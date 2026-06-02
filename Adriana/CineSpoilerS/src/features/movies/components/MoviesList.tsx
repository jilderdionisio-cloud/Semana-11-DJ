import { useEffect, useState } from "react"
import { getPopularMovies } from "../../../services/tmdb"
import { Movie } from "../../../types/movie"
import MovieCard from "./MovieCard"

export default function MoviesList() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const data: any = await getPopularMovies()
        const results: Movie[] = data?.results ?? []
        if (mounted) setMovies(results)
      } catch (err: any) {
        console.error(err)
        if (mounted) setError("No se pudo cargar las películas")
      } finally {
        if (mounted) setLoading(false)
      }
    }

    load()

    return () => {
      mounted = false
    }
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="rounded-2xl bg-zinc-900/50 h-96" />
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center">
        <p className="text-red-400">{error}</p>
      </div>
    )
  }

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </section>
  )
}