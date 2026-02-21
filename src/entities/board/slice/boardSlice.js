import {createSlice} from "@reduxjs/toolkit";
import {createBoard, fetchBoards, deleteBoards, editBoard} from "../api";

const initialState = {
    name: null,
    id: null,
    order: null,
    loading: false,
    error: null,
    boards: [],
}

const boardSlice = createSlice({
    name: "board",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createBoard.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createBoard.fulfilled, (state, action) => {
                state.loading = false;
                state.name = action.payload.name;
                state.id = action.payload.id;
                state.order = action.payload.order;
            })
            .addCase(createBoard.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            .addCase(fetchBoards.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBoards.fulfilled, (state, action) => {
                state.loading = false;
                state.boards = action.payload;
            })
            .addCase(fetchBoards.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            .addCase(deleteBoards.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteBoards.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(deleteBoards.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(editBoard.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editBoard.fulfilled, (state, action) => {
                state.loading = false;
                state.name = action.payload.name;
                state.id = action.payload.id;
            })
            .addCase(editBoard.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
        ;
    },
});

export const {
    reducer: boardReducer,
    actions: boardAction,
} = boardSlice;