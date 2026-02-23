import {createSlice} from '@reduxjs/toolkit';
import {fetchLists, createNewList, editList, deleteList} from "../api";


const initialState = {
    lists: [],
    id: null,
    name: null,
    order: null,
    error: null,
    loading: false,
}

const listSlice = createSlice({
    name: 'list',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchLists.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLists.fulfilled, (state, action) => {
                state.loading = false;
                state.lists = action.payload;
            })
            .addCase(fetchLists.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(createNewList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createNewList.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(createNewList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(editList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editList.fulfilled, (state, action) => {
                state.loading = false;
                state.name = action.payload.name;
                state.id = action.payload.id;
            })
            .addCase(editList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(deleteList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteList.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(deleteList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
        ;
    },
});

export const {
    reducer: listReducer,
    actions: listAction,
} = listSlice