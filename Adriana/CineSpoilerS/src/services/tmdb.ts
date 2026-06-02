import axios from "axios";

const token = ((import.meta as any).env?.VITE_TMDB_TOKEN) as string | undefined;

if (!token) {
  // Log a clear warning — the app should still run but requests will fail without a token
  console.warn("VITE_TMDB_TOKEN no está definido. Configura la variable de entorno para acceder a TMDB.");
}

const headers: Record<string, string> = {
  "Content-Type": "application/json",
};

if (token) headers.Authorization = `Bearer ${token}`;

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers,
});

export async function getPopularMovies() {
  const response = await tmdbApi.get("/movie/popular", {
    params: {
      language: "es-PE",
      page: 1,
    },
  });

  console.log("TMDB RESPONSE:", response.data);

  return response.data;
}