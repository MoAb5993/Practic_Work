import {createSlice} from "@reduxjs/toolkit";
import {loginRequest, registerRequest} from "../api";

const initialState = {
    token: null,
    name: null,
    email: null,
    password: null,
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
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
            .addCase(loginRequest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(registerRequest.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerRequest.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.name = action.payload.name;
                state.email = action.payload.email;
                state.password = action.payload.password;
            })
            .addCase(registerRequest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
        ;
    },
});

export const {
    reducer: userReducer,
    actions: userAction,
} = userSlice;
