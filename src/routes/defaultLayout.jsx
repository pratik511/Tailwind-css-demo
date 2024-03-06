import { Outlet } from "react-router-dom";
import Header from "../component/header";
import Footer from "../component/footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
