
import Content from "../pages/content";
import App from "../App";
import Clases from "../pages/clases";
import Semana9 from "../pages/semana9";
/*asd ad a da das*/ 
import React from "react";
;

import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/portfolioZ/",
    element: <App />,
    // children: [
    //   {
    //     path: "/portfolioZ/clases",
    //     element: <Clases />,
    //   },
    //   {
    //     path: "/portfolioZ/content",
    //     element: <Content />,
    //   },
    // ],
  },
  {
    path: "/portfolioZ/content",
    element: <Content />,
  },
  {
    path: "/portfolioZ/clases",
    element: <Clases />,
  },
  {
    path: "/portfolioZ/semana9",
    element: <Semana9 />,
  },
]);

export { router };

