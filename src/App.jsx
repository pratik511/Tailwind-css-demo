import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";

function App() {
  return (
    <>
      {/* <div className="relative w-full"> */}
        <RouterProvider router={router} />
      {/* </div> */}
    </>
  );
}

export default App;
