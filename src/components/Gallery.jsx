import styles from "./Gallery.module.css";

const images = [
  "2004",
  "2005",
  "2008",
  "2010",
  "2012",
  "3008",
  "2015",
  "3016",
  "3017",
  "3011",
  "3013",
];

function Gallery() {
  return (
    <section className={styles.section}>
      <p className={styles.galleryText}>
        Over 10,000 customers have traded more than 5,000 jewelry pieces on
        Karat Vault.
      </p>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryTrack}>
          {images.map((img, i) => (
            <img key={i} src={`/products/${img}.webp`} loading="lazy" />
          ))}

          {/* duplicate for infinite loop */}
          {images.map((img, i) => (
            <img
              key={`dup-${i}`}
              src={`/products/${img}.webp`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
