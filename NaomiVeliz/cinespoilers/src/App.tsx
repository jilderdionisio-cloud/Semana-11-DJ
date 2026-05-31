import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { 
  FaInfoCircle, FaStar, FaSearch, FaCalendarAlt, 
  FaTimes, FaArrowUp, FaRegClock, FaPlay, FaPlus, FaThumbsUp 
} from "react-icons/fa";

export default function App() {
  const [movies, setMovies] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=d93d5d37ef899c2aeb584b27c7455a1b&language=es-ES"
      )
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Filtrar películas por búsqueda
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  // Scroll suave y botón volver arriba
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Atajo de teclado para búsqueda (Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector('input[type="text"]')?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Obtener película destacada (la primera del grid)
  const featuredMovie = movies[0];

  // Skeleton Loading
  const SkeletonCard = () => (
    <div className="bg-[#1A1A1A] rounded-md overflow-hidden animate-pulse">
      <div className="w-full aspect-[2/3] bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A]"></div>
      <div className="p-3 space-y-2">
        <div className="h-4 bg-[#2A2A2A] rounded w-3/4"></div>
        <div className="h-3 bg-[#2A2A2A] rounded w-1/2"></div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#141414] text-white font-sans overflow-x-hidden">
      
      {/* HERO CON PELÍCULA DESTACADA - ESTILO NETFLIX PREMIUM */}
      {featuredMovie && !search && (
        <div className="relative h-[85vh] w-full overflow-hidden">
          {/* Background image con overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/70 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10" />
            <img
              src={`https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path || featuredMovie.poster_path}`}
              alt={featuredMovie.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-20 h-full flex flex-col justify-center px-4 md:px-12 lg:px-24 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">
              {featuredMovie.title}
            </h1>
            <div className="flex items-center gap-4 mb-4 text-sm md:text-base">
              <span className="text-green-500 font-semibold">
                {Math.floor(Math.random() * 30 + 90)}% coincidencia
              </span>
              <span>{featuredMovie.release_date?.slice(0, 4)}</span>
              <span className="border border-white/40 px-2 py-0.5 text-xs">
                {Math.floor(Math.random() * 3 + 1)}h {Math.floor(Math.random() * 30 + 20)}min
              </span>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-500 text-sm" />
                <span>{featuredMovie.vote_average?.toFixed(1)}</span>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mb-6 line-clamp-3">
              {featuredMovie.overview}
            </p>
            <div className="flex gap-3">
              <button className="bg-white text-black px-6 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-white/90 transition-all hover:scale-105">
                <FaPlay /> Reproducir
              </button>
              <button className="bg-gray-500/50 text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-500/70 transition-all backdrop-blur-sm">
                <FaPlus /> Mi lista
              </button>
              <button className="bg-gray-500/50 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-500/70 transition-all backdrop-blur-sm">
                <FaInfoCircle /> Información
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BARRA DE NAVEGACIÓN - ESTILO NETFLIX */}
      <div className={`sticky top-0 z-50 bg-gradient-to-b from-[#141414] to-transparent backdrop-blur-sm ${featuredMovie && !search ? 'py-4' : 'py-4 bg-[#141414]'}`}>
        <div className="px-4 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-red-600 text-2xl md:text-3xl font-bold tracking-tighter">
              CINESPOILERS
            </h1>
            <nav className="hidden md:flex gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition">Inicio</a>
              <a href="#" className="hover:text-white transition">Series</a>
              <a href="#" className="hover:text-white transition font-semibold text-white">Películas</a>
              <a href="#" className="hover:text-white transition">Mi lista</a>
            </nav>
          </div>
          
          {/* Barra de búsqueda estilo Netflix */}
          <div className="relative group">
            <input
              type="text"
              placeholder="🔍 Buscar película... (Ctrl+K)"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-md py-1.5 px-4 pl-8 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all w-40 md:w-64 focus:w-64 md:focus:w-80"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes className="text-xs" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className={`px-4 md:px-12 pb-14 ${featuredMovie && !search ? 'mt-0' : 'mt-0'}`}>
        
        {/* Título de sección estilo Netflix */}
        <div className="mb-6 mt-8">
          <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-2">
            <FaStar className="text-red-600 text-xl" />
            {search ? `Resultados para "${search}"` : "Populares en CineSpoilerS"}
            <span className="text-sm text-gray-400 font-normal ml-2">
              ({filteredMovies.length} títulos)
            </span>
          </h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4">
            {[...Array(18)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filteredMovies.length === 0 ? (
          <div className="text-center text-gray-400 text-lg py-12">
            No se encontraron películas con "{search}"
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3">
            {filteredMovies.map((movie, index) => (
              <div
                key={movie.id}
                className="relative group/movie"
                onMouseEnter={() => setHoveredMovie(movie.id)}
                onMouseLeave={() => setHoveredMovie(null)}
              >
                {/* TARJETA ESTILO NETFLIX CON EFECTO MODERNO */}
                <div className={`relative transition-all duration-300 ${
                  hoveredMovie === movie.id ? 'scale-110 z-20 shadow-2xl' : 'scale-100'
                }`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt={movie.title}
                    className={`w-full rounded-md object-cover transition-all duration-300 ${
                      hoveredMovie === movie.id ? 'rounded-b-none shadow-xl' : ''
                    }`}
                    style={{ aspectRatio: '2/3' }}
                    loading="lazy"
                  />
                  
                  {/* Badge de popularidad estilo Netflix */}
                  {movie.vote_average > 7.5 && (
                    <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-md">
                      TOP 10
                    </div>
                  )}
                  
                  {/* Rating badge */}
                  <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-yellow-500 text-[10px] font-bold px-1.5 py-0.5 rounded-sm flex items-center gap-0.5">
                    <FaStar className="text-yellow-500 text-[8px]" /> {movie.vote_average?.toFixed(1)}
                  </div>

                  {/* HOVER EXPANDIDO - ESTILO NETFLIX MODERNO */}
                  {hoveredMovie === movie.id && (
                    <div className="absolute left-0 right-0 top-full mt-0 bg-[#1A1A1A] rounded-b-md shadow-2xl z-30 overflow-hidden animate-fade-in-up">
                      <div className="p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            <button className="bg-white text-black p-1.5 rounded-full hover:scale-110 transition">
                              <FaPlay className="text-xs" />
                            </button>
                            <button className="bg-gray-600/50 text-white p-1.5 rounded-full hover:bg-gray-600 transition">
                              <FaPlus className="text-xs" />
                            </button>
                            <button className="bg-gray-600/50 text-white p-1.5 rounded-full hover:bg-gray-600 transition">
                              <FaThumbsUp className="text-xs" />
                            </button>
                          </div>
                          <button className="bg-gray-600/50 text-white p-1.5 rounded-full hover:bg-gray-600 transition">
                            <FaInfoCircle className="text-xs" />
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-2 text-[10px]">
                          <span className="text-green-500 font-semibold">
                            {Math.floor(Math.random() * 30 + 90)}% coincidencia
                          </span>
                          <span>{movie.release_date?.slice(0, 4)}</span>
                          <span className="border border-gray-500 px-1 text-[8px]">HD</span>
                        </div>
                        
                        <p className="text-[10px] text-gray-300 line-clamp-2">
                          {movie.overview?.slice(0, 100) || "Descripción no disponible"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Título solo visible cuando no hay hover expandido */}
                {hoveredMovie !== movie.id && (
                  <h3 className="text-xs md:text-sm font-medium mt-2 text-gray-300 group-hover/movie:text-white transition-colors line-clamp-1">
                    {movie.title}
                  </h3>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BOTÓN VOLVER ARRIBA ESTILO NETFLIX */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-800/80 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 z-50 group border border-white/20"
        >
          <FaArrowUp className="text-xl group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.2s ease-out forwards;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #141414;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #E50914;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #B80710;
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}