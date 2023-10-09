import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../component/defaultLayout/defaultLayout";
import Home from "./home";
import CardDetail from "../component/Common/CardDetail";
import Contact from "./contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <CardDetail />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
