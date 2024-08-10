import React from 'react'

const VideoTitile = ({title,overview}) => {
  return (
    <div className='absolute pt-[20%] px-24 bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-4xl font-bold py-2 text-white'>{title}</h1>
        <p className='text-lg w-1/4 py-2 text-white'>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-12 rounded-lg text-lg hover:bg-opacity-50'>Play</button>
            <button className='mx-2 bg-gray-400 text-white p-4 px-12 rounded-lg text-lg hover:bg-opacity-50'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitile