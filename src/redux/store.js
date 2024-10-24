import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import { authSlice } from "./Auth/Slice";

export const store = configureStore({
    reducer: {
       contacts: contactsReducer,
        filter: filterReducer,
       auth: authSlice,
    },
   
});

