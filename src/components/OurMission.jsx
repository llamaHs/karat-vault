import styles from "./OurMission.module.css";

function OurMission() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Our Mission to Give Fine Jewelry a Second Life</h2>
        </div>

        <div className={styles.missionContainer}>
          <p className={styles.mission}>
            At Karat Vault, we believe that fine jewelry should not remain
            forgotten in drawers. Beautiful pieces deserve to be worn,
            appreciated, and passed on to new owners who will value them just as
            much.
          </p>
          <p className={styles.mission}>
            As gold prices continue to fluctuate and awareness of the resale
            market grows, more people are looking to buy and sell pre-owned
            jewelry.
          </p>
          <p className={styles.mission}>
            This raised an important question for us:
            <strong>
              how can both buyers and sellers feel confident and satisfied in a
              second-hand jewelry transaction?
            </strong>
          </p>
          <p className={styles.mission}>
            Karat Vault was created to answer that question.
          </p>
          <p className={styles.mission}>
            By combining transparent pricing guidance, auction-based discovery,
            and a carefully designed marketplace experience, we aim to make
            buying and selling pre-owned jewelry simple, fair, and trustworthy
            for everyone involved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
