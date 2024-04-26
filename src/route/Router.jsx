import Error from "../pages/Error";
import Root from "../layout/Root";

import {
    createBrowserRouter
} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddItem from "../pages/AddItem";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: ()=> fetch("https://sr-painting-server.vercel.app/addItem")
                
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/addItem",
                element: <AddItem />
            },

        ]
    },
]);



export default router;
