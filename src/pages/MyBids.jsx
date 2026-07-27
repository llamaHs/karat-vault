import { useEffect, useReducer } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./MyBids.module.css";
import { useMyBids } from "../hooks/useBids";
import BidItem from "../components/BidItem";
import { tempCompletedAuction, tempPurchasedItems } from "../data/mockBids";

// const initialListNumber = 24;

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

function MyBids() {
  const { data: bids = [], isLoading, error } = useMyBids();

  const { finishLoading } = useOutletContext();
  const [{ sort }, dispatch] = useReducer(reducer, initialState);

  const activeItems = bids.map((bid) => ({
    ...bid.products,
    myBid: bid.amount,
  }));

  const listItems =
    sort === "active"
      ? activeItems
      : sort === "complete"
      ? tempCompletedAuction
      : tempPurchasedItems;

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
          Active Bids: {activeItems.length}
        </button>

        <button
          className={`${styles.sortButton} ${
            sort === "complete" ? styles.selected : ""
          }`}
          onClick={() => handleSort("complete")}
        >
          Completed Auctions: {tempCompletedAuction.length}
        </button>

        <button
          className={`${styles.sortButton} ${
            sort === "purchased" ? styles.selected : ""
          }`}
          onClick={() => handleSort("purchased")}
        >
          Purchased Items: {tempPurchasedItems.length}
        </button>
      </div>

      <div className={styles.listContainer}>
        {listItems.map((item) => (
          <BidItem key={item.id} item={item} type={sort} />
        ))}
      </div>

      {/* <div className={styles.roadContainer}>
        {!isLoad && fullItems.length > listNumber && (
          <button
            className={styles.roadButton}
            onClick={() => handleLoadList()}
          >
            LOAD MORE
          </button>
        )}
        {isSpin && <Spinner />}
      </div> */}
    </section>
  );
}

export default MyBids;
