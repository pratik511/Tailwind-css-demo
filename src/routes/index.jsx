import { createBrowserRouter } from "react-router-dom";
import CardDetail from "../component/Common/CardDetail";
import Home from "../page/home/index"
import Contact from "../page/contact/index"
import DefaultLayout from "./defaultLayout";

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
