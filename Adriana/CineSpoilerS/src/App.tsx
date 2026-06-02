import { Button } from "./components/ui/button";
import { useEffect } from "react";

import { getPopularMovies } from "./services/tmdb";

function App() {
  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black text-white">
      <h1 className="text-5xl font-bold">CineSpoilerS</h1>

      <Button className="bg-white text-black hover:bg-zinc-200">
        Get Started
      </Button>
    </main>
  );
}

export default App;