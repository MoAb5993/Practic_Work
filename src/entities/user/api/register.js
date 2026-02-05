import {createAsyncThunk} from "@reduxjs/toolkit";
import $api from "../../../shared/api";

export const registerRequest = createAsyncThunk(
    'registerSlice/registerRequest',
    async ({name, email, password}, thunkAPI) => {
        const {
            rejectWithValue,
        } = thunkAPI;

        try {
            const response = await $api.post(`/auth/registration`, {name, email, password});

            if (!response.data) {
                throw new Error()
            }

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('erroк');
        }
    }
)