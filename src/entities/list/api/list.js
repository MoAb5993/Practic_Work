import {createAsyncThunk} from "@reduxjs/toolkit";
import $api from "../../../shared/api";

export const fetchLists = createAsyncThunk (
    'listSlice/fetchLists',
    async (boardId, thunkAPI) => {
        const {
            rejectWithValue,
        } = thunkAPI

        try {
            const response = await $api.get(`/list/list`, {params: {boardId}});

            if (!response.data) {
                throw new Error("НЕТУ ЛИСТИКОВ!")
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

export const createNewList = createAsyncThunk (
    'listSlice/createList',
    async ({boardId, name}, thunkAPI) => {
        const {
            rejectWithValue,
        } = thunkAPI

        try {
            const response = await $api.post(`/list/createList`, {name, boardId});

            if (!response.data) {
                throw new Error("НЕ СОЗДАЕТСЯ ЛИСТИК!")
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

export const editList = createAsyncThunk (
    'listSlice/editList',
    async ({name, boardId, listId}, thunkAPI) => {
        const {
            rejectWithValue,
        } = thunkAPI;

        try {
            const response = await $api.put(`/list/editList`, {name, boardId, listId});

            if (!response.data) {
                throw new Error("НЕ ОБНОВЛЯЕТСЯ ЛИСТИК")
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

export const deleteList = createAsyncThunk (
    'listSlice/deleteList',
    async ({boardId, listId}, thunkAPI) => {
        const {
            rejectWithValue,
        } = thunkAPI

        try {
            const response = await $api.delete(`/list/deleteList`, {params: {boardId, listId}});

            if (!response.data) {
                throw new Error("НЕ УДАЛИЛСЯ ЛИСТИК, НАСЯНИКА!")
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

export const reorderList = createAsyncThunk(
    'listSlice/reorderList',
    async ({boardId, listId, order}, thunkAPI) => {
        const {
            rejectWithValue,
        } = thunkAPI

        try {
            const response = await $api.put(`/list/reorderList`, {listId, boardId, order});

            if (!response.data) {
                throw new Error("Не удалось поменять листы")
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