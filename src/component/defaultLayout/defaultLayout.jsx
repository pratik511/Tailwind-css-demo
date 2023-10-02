import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="mt-[64px] sm:mt-[72px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
