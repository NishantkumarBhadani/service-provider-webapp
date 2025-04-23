import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Layout from "./Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import MaidServices from "./pages/MaidServices";
import ElectricianServices from "./pages/ElectricianServices";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import { Login, Register } from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"Services",
          element:<Services/>,
          children:[
            {
              path:"maidServices",
              element:<MaidServices/>
            },
            {
              path:"electrician",
              element:<ElectricianServices/>
            }
          ]
        },
        {
            path:"about",
            element:<AboutUs/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"signup",
          element:<Register/>
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;