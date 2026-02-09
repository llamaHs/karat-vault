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
          <div className={styles.listItem}>
            <div className={styles.imgContainer}>
              <img src="./14k2.jpg" alt="a gold jewelry" />
            </div>
            <p>14K GOLD</p>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imgContainer}>
              <img src="./14k3.jpg" alt="a gold jewelry" />
            </div>
            <p>18K GOLD</p>
          </div>
          <div className={styles.listItem}>
            <div className={styles.imgContainer}>
              <img
                src="./gemstone.png"
                alt="a gold jewelry with blue gemstones"
              />
            </div>
            <p>GEMSTONES</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ByMaterial;
