import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiThumbsUp } from 'react-icons/fi'

export default function Card({result}) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md
    rounded-lg sm:border sm:border-slate-400 sm:m-2 sm:transition-shadow duration-300">
        <Link
            href={`/movie/${result.id}`}
        >
            <Image
                src={`https://image.tmdb.org/t/p/original${result.backdrop_path || result.poster_path}`}
                width={500}
                height={300}
                alt='Movie Poster'
                className='sm:rounded-t-lg group-hover:opacity-70 transition duration-300'

            />

        </Link>
        <div className="p-2">
            <p className="line-clamp-2 text-md">{result.overview}</p>
            <h2 className="text-lg font-bold truncate">{result.title || result.name}</h2>
            <p className="flex items-center">
                {result.release_date || result.first_air_date}
                <FiThumbsUp className="mr-1 ml-3"/> {result.vote_count}
            </p>
        </div>
    </div>
  )
}
