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
                element: <PrivateRoute><BrandList></BrandList></PrivateRoute>,
            },
            {
                path: "/allProduct",
                element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>,
                loader: () => fetch("https://technology-and-electronics-backend.vercel.app/product")
            },
            {
                path: "/brands/:brandName",
                element: <PrivateRoute><BrandDetails /></PrivateRoute>,
                // Add the loader function to fetch the product data based on the brand
                loader: ({ params }) => fetch(`https://technology-and-electronics-backend.vercel.app/product?brand=${params.brandName}`).then((response) => response.json())
              },
            {
                path: "/categories/categoriesDetails/:id",
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://technology-and-electronics-backend.vercel.app/categories/categoriesDetails/${params.id}`)
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path: "/updateProduct/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://technology-and-electronics-backend.vercel.app/product/${params.id}`)
            },
            {
                path: "/myCart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
            },
            {
                path: "/productDetails/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://technology-and-electronics-backend.vercel.app/product/${params.id}`)
            },

        ]
    }
])