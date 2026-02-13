import {createAsyncThunk} from "@reduxjs/toolkit";
import $api from "../../../shared/api";

export const createBoard = createAsyncThunk(
    'bardSlice/createBoard',
    async ({name}, thunkAPI) => {
        const {
            rejectWithValue,
        } = thunkAPI;

        try {
            const response = await $api.post('/board/createBoard', {name})

            if (!response.data) {
                throw new Error();
            }

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