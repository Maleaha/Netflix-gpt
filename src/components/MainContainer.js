import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if (movies === null) return null; // known as early return 
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative h-screen overflow-hidden">
      <VideoBackground movieId={id} />
      <div className="relative z-10">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
}

export default MainContainer;
