import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, createTask, editTask, deleteTask} from "../api";

const initialState = {
    tasks: [],
    id: null,
    name: null,
    order: null,
    error: null,
    loading: true,
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(createTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(createTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(editTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editTask.fulfilled, (state, action) => {
                state.loading = false;
                state.name = action.payload.id;
                state.id = action.payload.id;
            })
            .addCase(editTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(deleteTask.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteTask.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const {
    reducer: taskReducer,
    actions: taskAction,
} = taskSlice