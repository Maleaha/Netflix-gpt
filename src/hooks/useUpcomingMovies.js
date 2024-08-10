import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import {addUpcomingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const fetchUpcoming = async() => {
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
      const json = await response.json();
      dispatch(addUpcomingMovies(json.results));
    }
  
    useEffect(() => {
      fetchUpcoming();
    }, []);
}

export default useUpcomingMovies;