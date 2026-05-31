import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-12">
        <section className="w-full rounded-[32px] border border-white/10 bg-slate-900/70 p-10 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-5xl font-semibold tracking-tight text-violet-200 sm:text-6xl">
                CineSpoilerS
              </h1>
              <Badge variant="primary">Spoilers ocultos</Badge>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Tu e-commerce de tickets de cine con estilo minimalista. Mantén la UI simple,
              moderna y lista para escalar con Tailwind y componentes reutilizables.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button variant="primary">Explorar carteleras</Button>
              <Button variant="ghost">Ver mi carrito</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
