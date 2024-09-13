"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Movies = ({ dt }) => {

    const router = useRouter()

    return (
        <div onClick={() => router.push(`/movie/${dt?.id}`)} className='relative min-w-[458px] imgContainer'>
            <Image
                style={{ objectFit: 'cover' }}
                width={458}
                height={300}
                src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}
                className='transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-75'
            />

            <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-t from-black to-transparent'>
                <div className='text-2xl font-bold text-white'>{dt?.title}</div>
                <div className='text-white'>{dt?.release_date} - {dt?.vote_average}</div>
            </div>
        </div>
    )
}

export default Movies;
