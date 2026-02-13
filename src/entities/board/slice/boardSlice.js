import {createSlice} from "@reduxjs/toolkit";
import {createBoard} from "../api";

const initialState = {
    name: null,
    loading: false,
    error: null,
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
            })
            .addCase(createBoard.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
        ;
    },
});

export const {
    reducer: boardReducer,
    actions: boardAction,
} = boardSlice;