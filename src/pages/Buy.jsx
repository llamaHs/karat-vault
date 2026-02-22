import styles from "../pages/Buy.module.css";
import ItemList from "../components/ItemList";
import SearchFilter from "../components/SearchFilter";
import PageTitle from "../components/PageTitle";

function Buy() {
  return (
    <div className={styles.container}>
      <PageTitle
        img="./background-title-2-1.png"
        heading="Bid on Pieces"
        subHeading="Explore fine gold and jewelry listings available for competitive bidding now."
      />
      <SearchFilter />
      <ItemList />
    </div>
  );
}

export default Buy;
