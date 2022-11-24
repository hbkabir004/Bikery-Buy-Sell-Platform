import { createBrowserRouter } from "react-router-dom";
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
        ],
    },
])

export default router;