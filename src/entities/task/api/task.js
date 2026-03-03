import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../../shared/api";

export const fetchTasks = createAsyncThunk (
    'taskSlice/fetchTasks',
    async ({boardId, listId}, thunkAPI) => {
        const {
            rejectWithValue
        } = thunkAPI

        try {
            const response = await $api.get(`/task/task`, {params: {boardId, listId}});

            if (!response.data) {
                throw new Error("НЕ ПРИХОДЯТ ЗАДАЧИ! ОТДЫХАЕМ, НАСЯНИКА")
            }

            return {listId, task: response.data};
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

export const createTask = createAsyncThunk (
    'taskSlice/createTask',
    async ({name, listId}, thunkAPI) => {
        const {
            rejectWithValue
        } = thunkAPI

        try {
            const response = await $api.post(`/task/createTask`, {name, listId});

            if (!response.data) {
                throw new Error("НЕ СОЗДАЕТСЯ ЗАДАЧКА!")
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

export const editTask = createAsyncThunk (
    'taskSlice/editTask',
    async ({name, isActive, taskId, listId, boardId}, thunkAPI) => {
        const {
            rejectWithValue
        } = thunkAPI

        try {
            const response = await $api.put(`/task/editTask`, {name, isActive, taskId, boardId, listId});

            if (!response.data) {
                throw new Error("НЕ ИЗМЕНЯЕТСЯ ЗАДАЧКА!")
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

export const deleteTask = createAsyncThunk (
    'taskSlice/deleteTask',
    async ({taskId, listId, boardId}, thunkAPI) => {
        const {
            rejectWithValue
        } = thunkAPI

        try {
            const response = await $api.delete(`/task/deleteTask`, {params: {boardId, listId, taskId}});

            if (!response.data) {
                throw new Error("НЕ УДАЛЯЕТСЯ ЗАДАЧА!")
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

export const reorderTask = createAsyncThunk (
    'taskSlice/reorderTask',
    async ({taskId, newListId, boardId, order}, thunkAPI) => {
        const {
            rejectWithValue
        } = thunkAPI

        try {
            const response = await $api.put(`/task/reorderTask`, {taskId, newListId, boardId, order});

            if (!response.data) {
                throw new Error("Не перемещается задачка")
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