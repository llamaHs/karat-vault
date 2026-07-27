import { useNavigate } from "react-router-dom";
import styles from "./BidItem.module.css";

function BidItem({ item, type }) {
  const navigate = useNavigate();

  function handleMovePage(d) {
    navigate(`/item/${item.id}`);
  }

  return (
    <div
      className={`${styles.listItem} ${
        type === "complete" ? styles.completed : ""
      }`}
      onClick={handleMovePage}
    >
      <div className={styles.imgContainer}>
        <img src={item.image} alt={item.name} className={styles.image} />
        <div className={styles.offerCount}>
          <p>{item.offerCount}</p>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <h3 className={styles.title}>{item.name}</h3>
        <dl className={styles.itemInfo}>
          <dt>Starting Price</dt>
          <dd>{`$${item.askingPrice}`}</dd>

          {type === "active" && (
            <>
              <dt>Current Bid</dt>
              <dd className={styles.bid}>{`$${item.currentBid}`}</dd>

              <dt>Your Bid</dt>
              <dd className={styles.yourBid}>{`$${item.myBid}`}</dd>

              <dt>Due Date</dt>
              <dd>{item.dueDate}</dd>
            </>
          )}

          {type === "complete" && (
            <>
              <dt>Winning Bid</dt>
              <dd className={styles.bid}>{`$${item.winningBid}`}</dd>

              <dt>Your Bid</dt>
              <dd className={styles.yourBid}>{`$${item.myBid}`}</dd>

              <dt>Due Date</dt>
              <dd>{item.dueDate}</dd>
            </>
          )}

          {type === "purchased" && (
            <>
              <dt>Winning Bid</dt>
              <dd className={styles.bid}>{`$${item.winningBid}`}</dd>

              <dt>Payment Date</dt>
              <dd>{item.paymentDate}</dd>
            </>
          )}
        </dl>
      </div>
    </div>
  );
}

export default BidItem;
