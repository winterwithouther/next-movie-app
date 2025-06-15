import { getPopularMovies } from "@/lib/api";
import { Movie } from "@/lib/types";
import { MovieCard } from "@/components/MovieCard";

export default async function Page() {
    const movies: Movie[] = await getPopularMovies();
    console.log(movies);

    return (<>
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </main>
    </>)
}