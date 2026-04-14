import { Link } from "react-router-dom";
import styles from "./ItemList.module.css";
import { useProduct } from "../contexts/ProductContext";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useAuth } from "../contexts/MockAuthContext";

const initialListNumber = 24;

function ItemList({ listType, category, material, maxBid }) {
  const { products } = useProduct();
  const { isAuthenticated } = useAuth();

  const [listNumber, setListNumber] = useState(initialListNumber);
  const [isLoad, setIsLoad] = useState(false);
  const [isSpin, setIsSpin] = useState(false);

  const [sort, setSort] = useState("latest");

  const fullItems =
    listType === "hot"
      ? products.filter((item) => item.offerCount >= 10)
      : products;

  const filteredItems = fullItems.filter((item) => {
    const matchesCategory = category === "" || item.category === category;
    const matchesMaterial = material === "" || item.material === material;
    const matchesMaxBid = maxBid === 0 || item.currentBid <= maxBid;

    return matchesCategory && matchesMaterial && matchesMaxBid;
  });

  let sortedItems;
  if (sort === "latest")
    sortedItems = [...filteredItems].sort(
      (a, b) => new Date(b.listedAt) - new Date(a.listedAt)
    );

  if (sort === "oldest")
    sortedItems = [...filteredItems].sort(
      (a, b) => new Date(a.listedAt) - new Date(b.listedAt)
    );

  if (sort === "endingSoon")
    sortedItems = [...filteredItems].sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
    );

  if (sort === "popular")
    sortedItems = [...filteredItems].sort(
      (a, b) => b.offerCount - a.offerCount
    );
  if (sort === "highestBid")
    sortedItems = [...filteredItems].sort(
      (a, b) => b.currentBid - a.currentBid
    );
  if (sort === "lowestBid")
    sortedItems = [...filteredItems].sort(
      (a, b) => a.currentBid - b.currentBid
    );

  const shownItems = sortedItems.slice(0, listNumber);

  function handleLoadList() {
    setIsLoad(true);
    setIsSpin(true);
    setTimeout(() => {
      setIsSpin(false);
      setListNumber(filteredItems.length);
    }, 1000);
  }

  function handleChangeSort(newSort) {
    setSort(newSort);
  }

  useEffect(() => {
    setIsLoad(false);
    setListNumber(initialListNumber);
  }, [category, material, maxBid]);

  return (
    <section className={styles.section}>
      <div className={styles.sortContainer}>
        <label htmlFor="sort" className={styles.sortLabel}>
          Sort:
        </label>
        <select
          id="sort"
          className={styles.sortOption}
          value={sort}
          onChange={(e) => handleChangeSort(e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="popular">Popular</option>
          <option value="endingSoon">Ending Soon</option>
          <option value="highestBid">Highest Bid</option>
          <option value="lowestBid">Lowest Bid</option>
        </select>
      </div>

      <div className={styles.listContainer}>
        {shownItems.map((item) => (
          <Link
            to={`item/${item.id}`}
            className={styles.itemLink}
            key={item.id}
          >
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
                  <dd className={styles.bid}>
                    {isAuthenticated
                      ? `$${item.currentBid}`
                      : "Log in to see price"}
                  </dd>

                  <dt>Due Date</dt>
                  <dd>{item.dueDate}</dd>
                </dl>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.loadContainer}>
        {!isLoad && filteredItems.length > listNumber && (
          <button
            className={styles.loadButton}
            onClick={() => handleLoadList()}
          >
            LOAD MORE
          </button>
        )}
        {isSpin && <Spinner />}
      </div>
    </section>
  );
}

export default ItemList;
