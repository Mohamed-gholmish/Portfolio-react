import React from "react";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider,Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import NotFound from "./components/NotFound/NotFound";

import About from "./components/About/About";
let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index:true, element: <Home/> },
      { path:'home', element: <Home/> },
      { path: "portfolio", element: <Portfolio/> },
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
      { path: "*", element: <NotFound/> },
    ],
  },
]);
export default function App() {
 
  return <RouterProvider router={routers}>  </RouterProvider>;
}
