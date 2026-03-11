import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function PaymentMethods() {
  const { finishLoading } = useOutletContext();

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return <div></div>;
}

export default PaymentMethods;
