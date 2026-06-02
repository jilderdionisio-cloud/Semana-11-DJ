import MoviesList from "./features/movies/components/MoviesList";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      {/* Fondo con efecto sutil */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <header className="mb-8 md:mb-12 text-center">
          {/* Badge decorativo */}
          <div className="inline-flex mb-4">
            <span className="px-3 py-1 text-xs font-medium tracking-wide text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20 backdrop-blur-sm">
              🎬 CARTELERA PREMIUM
            </span>
          </div>
          
          <h1 className="mx-auto max-w-5xl text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[1.1] text-white">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,180,50,0.3)]">
              CineSpoilerS
            </span>
          </h1>
          
          <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Descubre una cartelera premium con estrenos y clásicos seleccionados para amantes del cine.
          </p>
          
          {/* Separador decorativo */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-amber-500/50" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          </div>
        </header>

        <MoviesList />
      </div>
    </main>
  )
}

export default App;