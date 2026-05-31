import { MovieCard } from './components/ui/movie-card'
import { movies } from './lib/movies'

function App() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="grid w-max grid-cols-[repeat(5,207px)] gap-x-[28px] gap-y-[27px] px-1">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  )
}

export default App
