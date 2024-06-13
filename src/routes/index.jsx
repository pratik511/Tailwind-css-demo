import { createBrowserRouter } from "react-router-dom";
import CardDetail from "../component/Common/CardDetail";
import Home from "../page/home/index"
import Contact from "../page/contact/index"
import DefaultLayout from "./defaultLayout";
import AboutUs from "../page/AboutUs";
import Services from "../page/Services";

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
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
