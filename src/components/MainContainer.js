import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitile from './VideoTitile'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return;

    const {original_title,overview,id} = movies[0];
    
  return (
    <div>
        <VideoTitile title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer