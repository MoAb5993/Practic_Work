import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "../../entities/user";

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});