import { Link } from "react-router-dom";
import styles from "./HotItemsNow.module.css";

function HotItemsNow() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Shop Today’s Most Popular Gold Jewelry</h2>
          <p>
            Discover hot items loved by customers — pieces that are trending
            right now.
          </p>
        </div>
        <div className={styles.listContainer}>
          <Link to={{ pathname: "/hot-items", search: "?category=ring" }}>
            <div className={styles.listItem}>
              <div className={styles.imgContainer}>
                <img src="./backgrounds/ring.png" alt="a gold ring" />
              </div>
              <p>RINGS</p>
            </div>
          </Link>

          <Link to={{ pathname: "/hot-items", search: "?category=necklace" }}>
            <div className={styles.listItem}>
              <div className={styles.imgContainer}>
                <img src="./backgrounds/necklace.jpg" alt="a gold necklace" />
              </div>
              <p>NECKLACES</p>
            </div>
          </Link>

          <Link to={{ pathname: "/hot-items", search: "?category=earrings" }}>
            <div className={styles.listItem}>
              <div className={styles.imgContainer}>
                <img
                  src="./backgrounds/earings.png"
                  alt="a pair of gold earings"
                />
              </div>
              <p>EARINGS</p>
            </div>
          </Link>

          <Link to={{ pathname: "/hot-items", search: "?category=bracelet" }}>
            <div className={styles.listItem}>
              <div className={styles.imgContainer}>
                <img src="./backgrounds/bracelet.png" alt="a gold bracelet" />
              </div>
              <p>BRACELETS</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HotItemsNow;
