import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero({ startLoading }) {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <div className={styles.heroImg}>
          <img
            src="./backgrounds/hero-img-dark.png"
            alt="hero image with gold necklace"
          />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroHeading}>
              <h1>Find Your Rare Piece.</h1>
              <h1>Meet a Fair Price.</h1>
            </div>
            <div className={styles.heroSubHeading}>
              <p>Buy and sell luxury gold jewelry at prices</p>
              <p>shaped by real-time market value.</p>
            </div>

            <div className={styles.ctaButton}>
              <Link to="buy" onClick={startLoading}>
                <button>Explore the Marketplace</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="nav-trigger" className={styles.navTrigger}></div>
    </section>
  );
}

export default Hero;
