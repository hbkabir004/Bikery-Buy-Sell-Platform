import { createBrowserRouter } from "react-router-dom";
import Registration from '../components/Auth/Registration';
import SignIn from '../components/Auth/SignIn';
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Shared/ErrorPage";
import Main from "../layout/Main";

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
        ],
    },
])

export default router;