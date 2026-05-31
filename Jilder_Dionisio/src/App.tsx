import { Button } from './components/ui/button'
import { MovieCard } from './components/ui/movie-card'
import { movies, movieSource } from './lib/movies'

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="mb-10 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-5xl font-semibold tracking-tight text-violet-600">CineSpoilers</h1>
            <Button variant="primary">Spoilers ocultos</Button>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            E-commerce de tickets de cine con datos mock y enfoque en consumo de TMDB. La app usa
            componentes en `src/components/ui` y Tailwind para evitar CSS manual.
          </p>
          <p className="text-sm text-slate-500">
            Fuente de datos: <a href={movieSource} target="_blank" rel="noreferrer" className="font-medium text-violet-600 underline">themoviedb.org</a>
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App
