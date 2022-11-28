import { createBrowserRouter } from "react-router-dom";
import Registration from '../components/Auth/Registration';
import SignIn from '../components/Auth/SignIn';
import Blog from "../components/Pages/Blog";
import BookingModal from "../components/Pages/Bookings/BookingModal";
import AllUsers from "../components/Pages/Dashboard/AllUsers";
import Home from "../components/Pages/Home/Home";
import AddProduct from "../components/Pages/Products/AddProduct";
import CategoryProducts from "../components/Pages/Products/CategoryProducts";
import ErrorPage from "../components/Shared/ErrorPage";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <Registration></Registration>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-rose.vercel.app/categories/${params.id}`)
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><BookingModal></BookingModal></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-rose.vercel.app/products/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            // {
            //     path: '/blog',
            //     element: <Blog></Blog>
            // },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <MyAppointment></MyAppointment>
            // },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/add-a-product',
                element: <AddProduct></AddProduct>
            },
        ]
    }
])

export default router;