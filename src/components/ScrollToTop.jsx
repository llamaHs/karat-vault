import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) return;

    window.scrollTo(0, 0);
  }, [hash, pathname]);

  return null;
}

export default ScrollToTop;
