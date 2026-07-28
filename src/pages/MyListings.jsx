import { useEffect, useReducer } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./MyListings.module.css";
import { tempExpiredListings, tempSoldItems } from "../data/mockListings";
import ListingItem from "../components/ListingItem";
import { useMyListings } from "../hooks/useProducts";

const initialState = {
  sort: "active",
};

function reducer(state, action) {
  switch (action.type) {
    case "changeSort":
      return { ...state, sort: action.payload };

    default:
      return state;
  }
}

function MyListings() {
  const { finishLoading } = useOutletContext();
  const [{ sort }, dispatch] = useReducer(reducer, initialState);

  const { data: activeListings = [], isLoading, error } = useMyListings();

  const listItems =
    sort === "active"
      ? activeListings
      : sort === "sold"
      ? tempSoldItems
      : tempExpiredListings;

  function handleSort(payload) {
    dispatch({ type: "changeSort", payload: payload });
  }

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return (
    <section className={styles.section}>
      <div className={styles.sortContainer}>
        <button
          className={`${styles.sortButton} ${
            sort === "active" ? styles.selected : ""
          }`}
          onClick={() => handleSort("active")}
        >
          Active Listings: {activeListings.length}
        </button>

        <button
          className={`${styles.sortButton} ${
            sort === "sold" ? styles.selected : ""
          }`}
          onClick={() => handleSort("sold")}
        >
          Sold Items: {tempSoldItems.length}
        </button>

        <button
          className={`${styles.sortButton} ${
            sort === "expired" ? styles.selected : ""
          }`}
          onClick={() => handleSort("expired")}
        >
          Expired Listings: {tempExpiredListings.length}
        </button>
      </div>

      <div className={styles.listContainer}>
        {listItems.map((item) => (
          <ListingItem key={item.id} item={item} type={sort} />
        ))}
      </div>
    </section>
  );
}

export default MyListings;
