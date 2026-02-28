import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function AppLayout({ startLoading, finishLoading }) {
  return (
    <>
      <ScrollToTop />
      <Nav startLoading={startLoading} />
      <Outlet context={{ startLoading, finishLoading }} />
      <FAQ />
      <Footer />
    </>
  );
}

export default AppLayout;
