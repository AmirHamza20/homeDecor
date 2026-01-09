import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";
import Products from "../Pages/Products";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        Component: Home,
        loader: () => fetch("../../public/Data.json")
      },
      {
        path: "/About",
        Component: About
      },
      {
        path: "/Products",
        Component: Products
      },
      {
        path: "/Wishlist",
        Component: Wishlist
      },
     
    ]
  },
]);