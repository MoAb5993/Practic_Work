import {createAsyncThunk} from "@reduxjs/toolkit";
import $api from "../../../shared/api";

export const loginRequest = createAsyncThunk(
    'loginSlice/loginRequest',
    async ({email, password}, thunkAPI) => {
        const {
            rejectWithValue,
        } = thunkAPI;

        try {
            const response = await $api.post('/auth/login', {email, password})

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.header);
            }
            return rejectWithValue(error.response.data.message);
        }
    }
)