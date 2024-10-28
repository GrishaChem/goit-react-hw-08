import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContact } from "./operations";
import {createSelector} from "@reduxjs/toolkit"
import { logout } from "../auth/operations";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const slice = createSlice({
    name: "contacts",
    initialState,
    // reducers: {
    //     deleteContact: (state, action) => {
    //         state.items = state.items.filter(item => item.id !== action.payload)
    //     },
    //     addContacts: (state, action) => {
    //         state.items.push(action.payload)
    //     },
    // },
    extraReducers: builder => {
        builder.addCase(fetchContact.fulfilled, (state, action) => {
            state.items = action.payload
        }).addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload)
        })
        builder.addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload)
        }).addCase(logout.fulfilled, () => initialState )
            .addMatcher(isAnyOf(fetchContact.pending, deleteContact.pending, addContact.pending), (state, action) => {
                state.loading= true;
        }) .addMatcher(isAnyOf(fetchContact.fulfilled, deleteContact.fulfilled, addContact.fulfilled), (state, action) => {
                state.loading= false;
        }).addMatcher(isAnyOf(fetchContact.rejected, deleteContact.rejected, addContact.rejected), (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        
    }
    

});


export const contactsReducer = slice.reducer;
