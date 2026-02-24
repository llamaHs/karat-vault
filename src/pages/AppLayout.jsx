import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function AppLayout({ startLoading, finishLoading }) {
  return (
    <>
      <Nav startLoading={startLoading} />
      <Outlet context={{ startLoading, finishLoading }} />
      <FAQ />
      <Footer />
    </>
  );
}

export default AppLayout;
