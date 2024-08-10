import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addMovie, addPopularMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const fetchNowPlaying = async() => {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
      const json = await response.json();
  
      console.log("Popular" + json);
      dispatch(addPopularMovies(json.results));
    }
  
    useEffect(() => {
      fetchNowPlaying();
    }, []);
}

export default usePopularMovies;