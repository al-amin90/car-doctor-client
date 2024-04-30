import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home/Home";
import SingUp from "../Pages/SingUp/SingUp";
import Login from "../Pages/Login/Login";
import Eroorpage from "../Pages/Eroorpage/Eroorpage";
import AddService from "../Pages/AddService/AddService";
import CartDetails from "../Pages/CartDetails/CartDetails";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Eroorpage></Eroorpage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/addServices",
                element: <AddService></AddService>
            },
            {
                path: "/servicesDetails",
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: "/cartDetails",
                element: <CartDetails></CartDetails>
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