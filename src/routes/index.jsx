import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../component/defaultLayout/defaultLayout";
import Home from "./home";
import CardDetail from "../component/Common/CardDetail";

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
    ],
  },
]);

export default router;
