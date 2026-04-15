import { Link, useNavigate } from "react-router-dom";
import styles from "./ItemDetail.module.css";
import { CATEGORY_META, MATERIAL_META } from "../constants/productMETA";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useState } from "react";
import BidForm from "./BidForm";
import { useAuth } from "../contexts/MockAuthContext";

function ItemDetail({ item }) {
  const [openBid, setOpenBid] = useState(false);
  const [successBid, setSuccessBid] = useState(false);

  const navigate = useNavigate();

  const category = CATEGORY_META[item.category];
  const material = MATERIAL_META[item.material];

  function handleCloseBid() {
    setOpenBid(false);
    setSuccessBid(true);
    setTimeout(() => setSuccessBid(false), 3000);
  }

  return (
    <section className={styles.section}>
      {/* Back button */}
      <div className={styles.buttonContainer}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          &larr; BROWSE OTHER PIECES
        </button>
      </div>

      {/* Item details */}
      <div className={styles.container}>
        {/* Image */}
        <div className={styles.imgContainer}>
          <img
            src={item.image}
            alt={item.name}
            className={styles.image}
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className={styles.infoContainer}>
          {/* Title */}
          <div className={styles.titleContainer}>
            <h2 className={styles.name}>{item.name}</h2>
            <p className={styles.description}>{item.description}</p>
          </div>

          <div className={styles.conditionWeightContainer}>
            {/* Contition */}
            <div className={styles.conditionContainer}>
              <p className={styles.condition}>
                Condition: <span>{item.condition}</span>
              </p>
              <div className={styles.tooltip}>
                <AiOutlineInfoCircle className={styles.infoIcon} />
                <span className={styles.tooltipText}>
                  <p>
                    <strong>NEW</strong>: Brand new, never worn, in original
                    condition.
                  </p>
                  <p>
                    <strong>VERY GOOD</strong>: Gently worn with minimal signs
                    of use, barely noticeable.
                  </p>
                  <p>
                    <strong>GOOD</strong>: Light, visible signs of wear but well
                    maintained overall.
                  </p>
                  <p>
                    <strong>SLIGHTLY SCRATCHED</strong>: Minor surface scratches
                    from normal use, with no structural damage.
                  </p>
                  <p>
                    <strong>SCRATCHED</strong>: Noticeable scratches or wear;
                    still functional and wearable.
                  </p>
                </span>
              </div>
            </div>

            {/* Weight */}
            <p className={styles.weight}>
              Weight: <span>{item.weight}g</span>
            </p>
          </div>

          {/* Filter */}
          <div className={styles.filterContainer}>
            <div className={styles.category}>
              {category && (
                <div className={styles.categoryOption}>
                  <img
                    src={category.icon}
                    alt={category.alt}
                    className={styles.categoryImage}
                  />
                  <p>{category.label}</p>
                </div>
              )}
            </div>
            <div className={styles.material}>
              {material && (
                <div className={styles.materialOption}>
                  <div className={styles[material.iconClass]} />
                  <p>{material.label}</p>
                </div>
              )}
            </div>
          </div>

          {/* Price */}
          <div className={styles.priceContainer}>
            <dl className={styles.priceInfo}>
              <dt>Starting Price</dt>
              <dd>{`$${item.askingPrice}`}</dd>

              <dt>Current Bid</dt>
              <dd className={styles.currentBid}>{`$${item.currentBid}`}</dd>

              <dt>Number of Bids</dt>
              <dd>{item.offerCount}</dd>
            </dl>
          </div>

          {/* Date */}
          <div className={styles.dateContainer}>
            <p className={styles.listedDate}>
              Listed on <span>{item.listedAt}</span>
            </p>
            <p className={styles.dueDate}>
              Ends on <span>{item.dueDate}</span>
            </p>
          </div>

          {/* Bid */}
          <div className={styles.bidContainer}>
            <button className={styles.wishlistButton}>
              <IoMdHeartEmpty className={styles.wishlistIcon} />
            </button>
            <div className={styles.bidDropdown}>
              <button
                className={`${styles.bidButton} ${
                  openBid ? styles.active : ""
                }`}
                onClick={() => {
                  setOpenBid((prev) => !prev);
                  setSuccessBid(false);
                }}
              >
                BID
              </button>

              {/* form */}
              <div
                className={`${styles.accordion} ${openBid ? styles.open : ""}`}
              >
                <BidForm
                  currentBid={item.currentBid}
                  onCloseBid={handleCloseBid}
                />
              </div>

              {!openBid && successBid && (
                <div className={styles.bidMessage}>
                  <p>Your bid was successfully placed.</p>
                  <p>Check your My page.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
