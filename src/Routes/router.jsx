import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home/Home";
import SingUp from "../Pages/SingUp/SingUp";
import Login from "../Pages/Login/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
        ]
    },
    {
        path: "/SingUp",
        element: <SingUp></SingUp>
    },
    {
        path: "/login",
        element: <Login></Login>
    }
]);

export default router;