import { createSlice} from "@reduxjs/toolkit";

import {registerRequest} from "../api";

const initialState = {
    token: null,
    name: null,
    email: null,
    password: null,
    loading: false,
    error: null,
}

const registerSlice = createSlice({
        name: 'registration',
        initialState,
        extraReducers: (builder) => {
            builder
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
                .addCase(registerRequest.rejected, (state) => {
                    state.loading = false;
                    state.error = 'Ошибка регистрации'
                })
        }
    }
)

export const {
    reducer: registerReducer,
} = registerSlice;
