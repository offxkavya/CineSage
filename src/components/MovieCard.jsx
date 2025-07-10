import React from 'react'
import { BiStar } from 'react-icons/bi'
const MovieCard = ({title,img,rating}) => {
  return (
    <div className='w-full rounded-lg h-full bg-white/30 backdrop-blur-2xl'>
        <img className='object-cover' src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />
        <div className='px-4 py-2 flex items-center justify-between'>
            <h1 className='text-white text-md'>{title}</h1>
            <h1 className='text-white-500 text-md flex items-center gap-2'><BiStar fill='#FFFF00'/> {rating}</h1>
        </div>
    </div>
  )
}

export default MovieCard