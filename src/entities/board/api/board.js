import {createAsyncThunk} from "@reduxjs/toolkit";
import $api from "../../../shared/api";

export const createBoard = createAsyncThunk(
    'boardSlice/createBoard',
    async (name, thunkAPI) => {
        const {
            rejectWithValue,
        } = thunkAPI;

        try {
            const response = await $api.post('/board/createBoard', name);

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

export const fetchBoards = createAsyncThunk (
    'boardSlice/fetchBoards',
    async (_, thunkAPI) => {
        const {
            rejectWithValue,
        } = thunkAPI;

        try {
            const response = await $api.get('/board/boards');

            if (!response.data) {
                throw new Error("НАСЯЛЬНИКА, ДОСКА НЕ ПРИХОДИТЬ К НАМ");
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

export const deleteBoards = createAsyncThunk (
    'boardSlice/deleteBoards',
    async (boardId, thunkAPI) => {
        const {
            rejectWithValue
        } = thunkAPI

        try {
            const response = await $api.delete(`/board/deleteBoard`,{params: {boardId}});

            if (!response.data) {
                throw new Error('АЙ НАСЯНИКА! НЕ УДАЛИЛАСЯ!');
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

export const editBoard = createAsyncThunk (
    'boardSlice/editBoard',
    async ({boardId, name}, thunkAPI) => {
        const {
            rejectWithValue,
        } = thunkAPI

        try {
            const response = await $api.put(`/board/editBoard`, {name, boardId});

            if (!response.data) {
                throw new Error("НЕ ОБНОВЛЯЕТСЯ");
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

export const reorderBoard = createAsyncThunk (
    'boardSlice/reorderBoard',
    async ({boardId, order}, thunkAPI) => {
        const {
            rejectWithValue,
        } = thunkAPI

        try {
            const response = await $api.put(`/board/reorderBoard`, {boardId, order});

            if (!response.data) {
                throw new Error("Не меняется порядок карточки")
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