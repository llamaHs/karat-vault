import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.hero}>
        <div className={styles.heroImg}>
          <img src="./hero-img-dark.png" alt="hero image with gold necklace" />
        </div>

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
            <button>Explore the Marketplace</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
