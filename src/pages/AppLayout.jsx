import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <FAQ />
      <Footer />
    </>
  );
}

export default AppLayout;
