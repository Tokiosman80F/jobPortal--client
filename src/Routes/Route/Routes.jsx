import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../Pages/HomePage/Home";
import PostJob from "../../Pages/PostJob/PostJob";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Alljob from "../../Pages/AllJobs/Alljob";
import MyJob from "../../Pages/MyJob/MyJob";


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
        },
        {
          path:'/all-job',
          element:<Alljob></Alljob>
        },
        {
          path:'/my-job',
          element:<MyJob></MyJob>
        }
    ]
  },
  
]);