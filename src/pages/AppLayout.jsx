import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function AppLayout({ startLoading, finishLoading }) {
  const location = useLocation();
  const hideFAQ = location.pathname === "/careers";

  return (
    <>
      <ScrollToTop />
      <Nav startLoading={startLoading} />
      <Outlet context={{ startLoading, finishLoading }} />
      {!hideFAQ && <FAQ />}
      <Footer />
    </>
  );
}

export default AppLayout;
