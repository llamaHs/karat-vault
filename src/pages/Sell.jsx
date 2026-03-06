import { useOutletContext } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { useEffect } from "react";
import SellForm from "../components/SellForm";

function Sell() {
  const { finishLoading } = useOutletContext();

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return (
    <>
      <PageTitle
        img="./backgrounds/background-title-5.jpg"
        heading="List Your Pieces"
        subHeading="Submit your jewelry pieces for bidding."
      />
      <SellForm />
    </>
  );
}

export default Sell;
