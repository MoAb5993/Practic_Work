import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "../../entities/user";
import {boardReducer} from "../../entities/board";

export const store = configureStore({
    reducer: {
        user: userReducer,
        board: boardReducer,
    },
});