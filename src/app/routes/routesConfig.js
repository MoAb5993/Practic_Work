import {createBrowserRouter} from 'react-router'
import {AuthPage} from "../../pages/Auth";
import {RegisterPage} from "../../pages/Register";
import {BoardPage} from "../../pages/Board";
import {ListsPage} from "../../pages/Lists";
import { ENUM_LINK } from '../../shared/Constans';

export const routesConfig = createBrowserRouter([

    {
        children:[
            {
                path: ENUM_LINK.MAIN,
                element: <AuthPage/>
            },
            {
                path: ENUM_LINK.REGISTER,
                element: <RegisterPage/>
            },
            {
                path: ENUM_LINK.BOARDS,
                element: <BoardPage/>
            },
            {
                path: ENUM_LINK.LIST,
                element: <ListsPage/>
            }

        ]
    }

])

