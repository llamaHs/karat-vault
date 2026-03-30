import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import styles from "./AppLayout.module.css";

function AppLayout({ startLoading, finishLoading }) {
  const location = useLocation();
  const hideFAQ = location.pathname === "/careers";

  return (
    <>
      <ScrollToTop />
      <Nav startLoading={startLoading} />

      <main className={styles.main}>
        <Outlet context={{ startLoading, finishLoading }} />
      </main>

      {!hideFAQ && <FAQ />}
      <Footer />
    </>
  );
}

export default AppLayout;
