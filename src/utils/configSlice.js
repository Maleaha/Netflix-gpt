import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState: {
        lang:"en"
    },
    reducers: {
        onChangeLanguage: (state,action) => {
            state.lang = action.payload
        }
    }
})

export default configSlice.reducer;
export const {onChangeLanguage} = configSlice.actions;