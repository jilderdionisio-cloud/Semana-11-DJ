import { Badge } from './components/ui/badge'

function App() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-5xl font-semibold tracking-tight text-violet-600">CineSpoilers</h1>
          <Badge variant="primary">Spoilers ocultos</Badge>
        </div>
      </div>
    </main>
  )
}

export default App
