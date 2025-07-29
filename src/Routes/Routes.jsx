import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../components/ErrorPage";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import MyList from "../Pages/MyList/MyList";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import AllProducts from "../Pages/AllProducts/AllProducts";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      // {
      //   path: "/allTouristsSpot",
      //   element: <AllTouristsSpot></AllTouristsSpot>,
      // },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/addProducts",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/categoryDetails/:subCategory",
        element: <CategoryDetails></CategoryDetails>,
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
