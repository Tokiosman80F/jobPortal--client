import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
        
        }
    ]
  },
]);