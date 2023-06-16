
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Contact/Login/Login";
import Registration from "../Pages/Contact/Registration/Registration";
import ErrorPage from "../Pages/ErroePage/ErrorPage";
import Bolgs from "../Pages/Blogs/Bolgs";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";

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
  },
  {
    path:'/toydetails/:id',
    element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
    // eslint-disable-next-line no-unused-vars
    loader: ({ params }) => fetch(`https://toy-station-server-arpita-malaker.vercel.app/toys`)
},
{
  path:'/alltoys',
  element:<AllToys></AllToys>
},
{
  path:'/addtoy',
  element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>
},
{
  path:'/mytoys',
  element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
}
  
  
    
      ]
    },
  ]);