import { Link } from "react-router-dom";
import styles from "./ItemList.module.css";
import { useProduct } from "../contexts/ProductContext";
import { useState } from "react";
import Spinner from "./Spinner";

function ItemList({ listType }) {
  const { products } = useProduct();

  const [listNumber, setListNumber] = useState(24);
  const [isRoad, setIsRoad] = useState(false);
  const [isSpin, setIsSpin] = useState(false);

  const items =
    listType === "hot"
      ? products.filter((item) => item.offerCount >= 10).slice(0, listNumber)
      : products.slice(0, listNumber);

  function handleRoadList() {
    setIsRoad(true);
    setIsSpin(true);
    setTimeout(() => {
      setIsSpin(false);
      setListNumber(products.length);
    }, 1000);
  }

  return (
    <section className={styles.section}>
      <div className={styles.sortContainer}>
        <label htmlFor="sort" className={styles.sortLabel}>
          Sort:
        </label>
        <select id="sort" className={styles.sortOption}>
          <option value="latest">Latest</option>
          <option value="popular">Popular</option>
          <option value="highestBid">Highest Bid</option>
          <option value="lowestBid">Lowest Bid</option>
        </select>
      </div>

      <div className={styles.listContainer}>
        {items.map((item) => (
          <Link to={`${item.id}`} className={styles.itemLink} key={item.id}>
            <div className={styles.listItem}>
              <div className={styles.imgContainer}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.image}
                />
                <div className={styles.offerCount}>
                  <p>{item.offerCount}</p>
                </div>
              </div>
              <div className={styles.infoContainer}>
                <h3 className={styles.title}>{item.name}</h3>
                <dl className={styles.itemInfo}>
                  <dt>Starting Price</dt>
                  <dd>{`$${item.askingPrice}`}</dd>

                  <dt>Current Bid</dt>
                  <dd className={styles.bid}>{`$${item.currentBid}`}</dd>

                  <dt>Due Date</dt>
                  <dd>{item.dueDate}</dd>
                </dl>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.roadContainer}>
        {!isRoad && (
          <button
            className={styles.roadButton}
            onClick={() => handleRoadList()}
          >
            ROAD MORE
          </button>
        )}
        {isSpin && <Spinner />}
      </div>
    </section>
  );
}

export default ItemList;
