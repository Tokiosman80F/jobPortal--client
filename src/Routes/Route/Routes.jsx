import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../Pages/HomePage/Home";
import PostJob from "../../Pages/PostJob/PostJob";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/postJob",
          element:<PostJob></PostJob>
        },
        {
          path:'/login',
          element:<LoginPage></LoginPage>
        },
        {
          path:'/register',
          element:<RegisterPage></RegisterPage>
        }
    ]
  },
  
]);