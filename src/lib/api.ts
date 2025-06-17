
import { Movie } from "./types";
const API_KEY = process.env.API_KEY

export async function getPopularMovies(): Promise<Movie[]> {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    
    if (!res.ok) {
        throw new Error(`failed to fetch popular movies: ${res.status}`);
    }

    const data = await res.json();
    return data.results as Movie[];
}

export async function getMovie(id: string): Promise<Movie> {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const res = await fetch(url);

    const data = await res.json();
    return data as Movie;
}