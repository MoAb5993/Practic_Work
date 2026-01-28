import {createBrowserRouter} from 'react-router'
import {AuthPage} from "../../pages/Auth";
import {RegisterPage} from "../../pages/Register";
import {BoardPage} from "../../pages/Board";
import {ListsPage} from "../../pages/Lists";

export const routesConfig = createBrowserRouter([

    {
        children:[
            {
                path: '/',
                element: <AuthPage/>
            },
            {
                path: '/register',
                element: <RegisterPage/>
            },
            {
                path: '/boards',
                element: <BoardPage/>
            },
            {
                path: '/lists',
                element: <ListsPage/>
            }

        ]
    }

])

