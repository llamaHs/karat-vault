import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function MyListings() {
  const { finishLoading } = useOutletContext();

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return <div></div>;
}

export default MyListings;
