import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black'>
        <div className='-mt-52 pl-12 relative z-10'>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
            <MovieList title={"Trending"} movies={movies.topRatedMovies} />
        </div>
    </div>
  )
}

export default SecondaryContainer