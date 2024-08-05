import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      console.log('not visible');
    } else {
      console.log('is visible');
    }
  });

  window.addEventListener('focus', function () {
    console.log('has focus');
  });

  window.addEventListener('blur', function () {
    console.log('lost focus');
  });

  if (import.meta.env.VITE_APP_EVENT_STATUS && false) {
    document.onkeydown = (e) => {
      if (e.key == "F12") {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.code == 'KeyI') {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.code == 'KeyC') {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.code == 'KeyJ') {
        e.preventDefault();
      }
      if (e.ctrlKey && e.code == 'KeyU') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });

    document.onselectstart = new Function("return false")
  }

  return (
    <>
      {/* <div className="relative w-full"> */}
      <RouterProvider router={router} />
      {/* </div> */}
    </>
  );
}

export default App;
