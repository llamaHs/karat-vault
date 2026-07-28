import { useNavigate } from "react-router-dom";
import styles from "./ListingItem.module.css";

function ListingItem({ item, type }) {
  const navigate = useNavigate();

  function handleMovePage() {
    navigate(`/item/${item.id}`);
  }

  return (
    <div className={styles.listItem} onClick={handleMovePage}>
      <div className={styles.imgContainer}>
        <img src={item.image} alt={item.name} className={styles.image} />
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
            </>
          )}

          {type === "sold" && (
            <>
              <dt>Final Price</dt>
              <dd className={styles.finalBid}>{`$${item.finalPrice}`}</dd>
            </>
          )}

          <dt>Offer Count</dt>
          <dd>{type === "expired" ? 0 : item.offerCount}</dd>

          <dt>Due Date</dt>
          <dd>{item.dueDate}</dd>
        </dl>
      </div>
    </div>
  );
}

export default ListingItem;
