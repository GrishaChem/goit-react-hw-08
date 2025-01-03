import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
};

const slice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload
            console.log(1);
        }
        
    },
});




export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;