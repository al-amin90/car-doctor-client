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
import { baseURL } from "../Utilis/url";
import PrivateRoute from "./PrivateRoute";


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
                path: "/servicesDetails/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`${baseURL}/services/${params.id}`)
            },
            {
                path: "/checkOut/:id",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
                loader: ({ params }) => fetch(`${baseURL}/service/${params.id}`)
            },
            {
                path: "/cartDetails",
                element: <PrivateRoute>
                    <CartDetails></CartDetails>
                </PrivateRoute>
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