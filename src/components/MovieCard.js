import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 px-4'>
        <img src={IMG_CDN_URL + posterPath} alt='Poster image' />
    </div>
  )
}

export default MovieCard