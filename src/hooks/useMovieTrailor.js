import { API_OPTIONS } from '../utils/constant';
import { movieTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useMovieTrailor = (movieId) => {
    

    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(movieTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideo();
    }, [movieId]); 

    
}

export default useMovieTrailor