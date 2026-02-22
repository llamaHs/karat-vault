import ItemList from "../components/ItemList";
import PageTitle from "../components/PageTitle";
import SearchFilter from "../components/SearchFilter";
import styles from "./HotItems.module.css";

function HotItems() {
  return (
    <div className={styles.container}>
      <PageTitle
        img="./background-title-1.png"
        heading="Popular Pieces Right Now"
        subHeading="Discover trending gold and jewelry pieces loved by our customers."
      />
      <SearchFilter />
      <ItemList listType={"hot"} />
    </div>
  );
}

export default HotItems;
