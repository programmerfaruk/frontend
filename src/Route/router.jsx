import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Categories from "../components/Categories/Categories";
import CategoryDetails from "../components/CategoryDetails/CategoryDetails";
import Category from "../components/Category/Category";

export const myRoute = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/categories",
                element: <Categories></Categories>,
            },
            {
                path: "/categories:id",
                element: <Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5173/categories/${params._id}`)
            },
            
        ]
    }
])