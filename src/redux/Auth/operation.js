import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit"

// axios.defaults.baseURL = "https://connections-api.goit.global/";

export const goitApi = axios.create({
    baseURL: 'https://connections-api.goit.global/'
})

export const register = createAsyncThunk('register', async (credentials, thunkApi) =>
{
    try {
        const { data } = await goitApi.post('users/signup', credentials)
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const login = createAsyncThunk('login', async (credentials, thunkApi) =>
{
    try {
        const { data } = await goitApi.post('users/login', credentials)
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})