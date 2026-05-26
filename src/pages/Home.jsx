import { useLocation, useOutletContext } from "react-router-dom";
import ByMaterial from "../components/ByMaterial";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import HotItemsNow from "../components/HotItemsNow";
import Testimonial from "../components/Testimonial";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

function Home() {
  const { startLoading } = useOutletContext();
  const location = useLocation();
  const { clearLogout } = useAuth();

  useEffect(() => {
    if (location.state?.clearLogout) {
      clearLogout();
    }
  }, [location, clearLogout]);

  return (
    <>
      <Hero startLoading={startLoading} />
      <HotItemsNow />
      <Feature />
      <ByMaterial />
      <Testimonial />
    </>
  );
}

export default Home;
