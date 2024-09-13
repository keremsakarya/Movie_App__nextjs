import Movies from '@/components/Movies'
import React from 'react'

const page = async ({ searchParams }) => {

    const res = await fetch(
        `https://api.themoviedb.org/3/${searchParams.genre
            ? "movie/" + searchParams.genre
            : "trending/all/day"
        }?api_key=6a21ea9b246cba1ba1f4c57fe960a2fd&language=en-US&page=1`,
        {
            next: { revalidate: 10000 },
        }
    )

    const data = await res.json()

    return (
        <div className=" flex items-center justify-center flex-wrap gap-3 m-5">
            {
                data?.results?.map((dt, i) => (
                    <Movies key={i} dt={dt} />
                ))
            }
        </div>
    )
}

export default page