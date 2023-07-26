import { Routes, Route } from "react-router-dom";
import Content from "../pages/content";
import App from "../App";
import Clases from "../pages/clases";
/*asd ad a da das*/ 
import React from "react";
;

import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/portfolioZ/",
    element: <App />,
    children: [
      {
        path: "/portfolioZ/clases",
        element: <Clases />,
      },
      {
        path: "/portfolioZ/content",
        element: <Content />,
      },
    ],
  },
]);

export { router };

