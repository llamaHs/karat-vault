import { Link } from "react-router-dom";
import styles from "./ByMaterial.module.css";

function ByMaterial() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Browse by Material</h2>
          <p>
            Browse pieces by material, from classic gold karats to gemstones,
            and decide what to sell or buy.
          </p>
        </div>
        <div className={styles.listContainer}>
          <Link to={{ pathname: "/buy", search: "?material=14k" }}>
            <div className={styles.listItem}>
              <div className={styles.imgContainer}>
                <img
                  src="./backgrounds/14k2.jpg"
                  alt="a gold jewelry"
                  loading="lazy"
                />
              </div>
              <p>14K GOLD</p>
            </div>
          </Link>

          <Link to={{ pathname: "/buy", search: "?material=18k" }}>
            <div className={styles.listItem}>
              <div className={styles.imgContainer}>
                <img
                  src="./backgrounds/14k3.jpg"
                  alt="a gold jewelry"
                  loading="lazy"
                />
              </div>
              <p>18K GOLD</p>
            </div>
          </Link>

          <Link to={{ pathname: "/buy", search: "?material=gemstone" }}>
            <div className={styles.listItem}>
              <div className={styles.imgContainer}>
                <img
                  src="./backgrounds/gemstone.webp"
                  alt="a gold jewelry with blue gemstones"
                  loading="lazy"
                />
              </div>
              <p>GEMSTONES</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ByMaterial;
