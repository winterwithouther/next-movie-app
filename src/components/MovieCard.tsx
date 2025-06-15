import Image from "next/image";
import { Movie } from "@/lib/types";

interface MovieCardProps {
    movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
    return (<>
        <div className="bg-white rounded shadow p-2">
            <div className="relative w-full aspect=[2/3]">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="object-cover rounded"
                    width={500}
                    height={500}
                />
            </div>
            <h2 className="text-lg font-semibold mt-2 text-black">{movie.title}</h2>
        </div>
    </>)
}