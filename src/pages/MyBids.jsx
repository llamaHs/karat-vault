import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function MyBids() {
  const { finishLoading } = useOutletContext();

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return <div></div>;
}

export default MyBids;
