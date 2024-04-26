import Error from "../pages/Error";
import Root from "../layout/Root";

import {
    createBrowserRouter
} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddItem from "../pages/AddItem";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
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
                element: <AddItem/>
            }
        ]
    },
]);



export default router;
