import { getMovie } from "@/lib/api";
import { Movie } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react"

interface Props {
    params: {
        id: string;
    }
}

export default async function Page({ params }: Props) {
    const { id } = await params;
    const movie: Movie | null = await getMovie(id);
    console.log(movie);

    return (<>
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            {movie.poster_path && (
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={300}
                    height={450}
                    className="rounded-lg shadow"
                />
            )}
            <p className="mt-4">{movie.overview}</p>
            <p className="mt-2 text-sm text-gray-500">Release date: {movie.relaese_date}</p>

            <Link href="/movies" className="text-blue-500 hover:underline mt-4 inline-block">
                ← Back to Movies
            </Link>
        </div>
    </>)
}