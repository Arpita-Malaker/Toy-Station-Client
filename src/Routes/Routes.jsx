
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Contact/Login/Login";
import Registration from "../Pages/Contact/Registration/Registration";
import ErrorPage from "../Pages/ErroePage/ErrorPage";
import Bolgs from "../Pages/Blogs/Bolgs";

  export const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage></ErrorPage>,
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
    },
    {
      path:'/blogs',
      element:<Bolgs></Bolgs>
  }
    
      ]
    },
  ]);