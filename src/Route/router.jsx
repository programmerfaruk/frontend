import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Categories from "../components/Categories/Categories";
import CategoryDetails from "../components/CategoryDetails/CategoryDetails";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../components/Products/ProductDetails";
import AllProducts from "../components/Products/AllProducts";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import BrandDetails from "../components/BrandList/BrandDetails";
import BrandList from "../components/BrandList/BrandList";

export const myRoute = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
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
                path: "/allProduct",
                element: <AllProducts></AllProducts>,
                loader: () => fetch("http://localhost:5001/product")
            },
            {
                path: "/brands/:brandName", // Use a dynamic parameter for the brand name
                element: <BrandDetails />, // Render the BrandDetails component
            },
            {
                path: "/", // Use the root path
                element: <BrandList />, // Render the BrandList component
              },
            {
                path: "/categories/categoriesDetails/:id",
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5001/categories/categoriesDetails/${params.id}`)
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path: "/updateProduct/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5001/product/${params.id}`)
            },
            {
                path: "/myCart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
            },
            {
                path: "/productDetails/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5001/product/${params.id}`)
            },

        ]
    }
])