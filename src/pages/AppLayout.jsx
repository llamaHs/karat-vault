import { Outlet } from "react-router-dom";
import FAQ from "../components/FAQ";

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
