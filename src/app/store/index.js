import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "../../entities/user";
import {boardReducer} from "../../entities/board";
import {listReducer} from "../../entities/list";
import {taskReducer} from "../../entities/task";

export const store = configureStore({
    reducer: {
        user: userReducer,
        board: boardReducer,
        list: listReducer,
        task: taskReducer,
    },
});