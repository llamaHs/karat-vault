import { useOutletContext } from "react-router-dom";
import styles from "../pages/Buy.module.css";
import ItemList from "../components/ItemList";
import SearchFilter from "../components/SearchFilter";
import PageTitle from "../components/PageTitle";
import { useEffect } from "react";

function Buy() {
  const { finishLoading } = useOutletContext();

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return (
    <div className={styles.container}>
      <PageTitle
        img="./backgrounds/background-title-2-1.png"
        heading="Bid on Pieces"
        subHeading="Explore fine gold and jewelry listings available for competitive bidding now."
      />
      <SearchFilter />
      <ItemList />
    </div>
  );
}

export default Buy;
