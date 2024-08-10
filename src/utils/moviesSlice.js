import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies:null,
        movieVideoTrailer:null,
        popularMovies:null,
        upcomingMovies:null,
        topRatedMovies:null
    },
    reducers: {
        addMovie: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        movieTrailerVideo:(state,action) => {
            state.movieVideoTrailer = action.payload;
        },
        addPopularMovies:(state,action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies:(state,action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies:(state,action) => {
            state.topRatedMovies = action.payload;
        }
    }
})

export default moviesSlice.reducer;
export const {addMovie, movieTrailerVideo,addPopularMovies, addUpcomingMovies,addTopRatedMovies} = moviesSlice.actions;