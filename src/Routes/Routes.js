import { createBrowserRouter } from "react-router-dom";
import Registration from '../components/Auth/Registration';
import SignIn from '../components/Auth/SignIn';
import Blog from "../components/Pages/Blog";
import Home from "../components/Pages/Home/Home";
import AllProducts from "../components/Pages/Products/AllProducts";
import CategoryProducts from "../components/Pages/Products/CategoryProducts";
import ErrorPage from "../components/Shared/ErrorPage";
import Main from "../layout/Main";
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
                path: '*',
                element: <ErrorPage></ErrorPage>
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
                path: '/allproducts',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-rose.vercel.app/categories/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ],
    },
])

export default router;