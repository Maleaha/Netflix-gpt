import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addMovie } from '../utils/moviesSlice'
import { useEffect } from 'react'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const fetchNowPlaying = async() => {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await response.json();
  
      console.log(json);
      dispatch(addMovie(json.results));
    }
  
    useEffect(() => {
      fetchNowPlaying();
    }, []);
}

export default useNowPlayingMovies;