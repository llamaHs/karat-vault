import styles from "./PageTitle.module.css";

function PageTitle({ img, heading, subHeading }) {
  return (
    <section className={styles.section}>
      <div className={styles.imgContainer}>
        <img src={img} alt="gold jewelry" className={styles.titleImage} />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subHeading}>{subHeading}</p>
      </div>
    </section>
  );
}

export default PageTitle;
