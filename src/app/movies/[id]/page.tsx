import { Movie } from "@/lib/types";
import React from "react"

interface Props {
    params: {
        id: string;
    }
}

export default async function Page({ params }: Props) {
    const { id } = await params;

    console.log(movie);

    return (<>
        <div>
        </div>        
    </>)
}