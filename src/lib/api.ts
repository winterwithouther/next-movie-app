import { tmdb } from "./tmdb";
import { Movie } from "./types";

export async function getPopularMovies(): Promise<Movie[]> {
    const res = await tmdb.get("/movie/popular");
    return res.data.results;
}