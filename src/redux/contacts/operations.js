import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { goitApi } from "../rarar/operations";


export const fetchContact = createAsyncThunk('fetchContact', async (_, thunkApi) => {
    try {
        const { data } = await goitApi.get('Contacts')
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('addContact', async (contact, thunkApi) => {
    try {
        const { data } = await goitApi.post('Contacts', contact)
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('deleteContact', async (contact, thunkApi) => {
    try {
        const { data } = await goitApi.delete(`Contacts/${contact.id}`)
        return data.id;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});
