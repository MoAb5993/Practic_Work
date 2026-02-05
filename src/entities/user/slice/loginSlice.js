import { createSlice} from "@reduxjs/toolkit";

import {loginRequest} from "../api";

const initialState = {
    token: null,
    email: null,
    password: null,
    loading: false,
    error: null,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginRequest.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginRequest.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.email = action.payload.email;
                state.password = action.payload.password;
            })
            .addCase(loginRequest.rejected, (state) => {
                state.loading = false;
                state.error = 'Ошибка авторизации'
            });
    },
});

export const {
    reducer: loginReducer,
    actions: userAction,
} = loginSlice;
