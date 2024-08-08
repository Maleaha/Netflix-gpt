import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the default export and rename it to userReducer
import moviesReducer from "./moviesSlice";

const appstore = configureStore({
    reducer: {
        user: userReducer,
        movies:moviesReducer,
    }
});

export default appstore;
