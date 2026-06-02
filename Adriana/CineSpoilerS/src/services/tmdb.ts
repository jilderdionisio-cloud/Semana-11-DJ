import axios from "axios";

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.local.VITE_TMDB_TOKEN}`,
    "Content-Type": "application/json",
  },
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