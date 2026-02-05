import { configureStore} from "@reduxjs/toolkit";

import {loginReducer} from "../../entities/user";
import {registerReducer} from "../../entities/user";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        registration: registerReducer,
    },
});