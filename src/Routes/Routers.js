import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";

export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])