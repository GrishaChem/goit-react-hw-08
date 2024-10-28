import { selectFilter } from "../filters/selectors"
import {createSelector} from "@reduxjs/toolkit"
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.loading
export const selectError = state => state.contacts.error


export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
     const filteredData = contacts.filter((contact) =>
         contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
         return filteredData;
    
})
