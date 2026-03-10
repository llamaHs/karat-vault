import styles from "./OurSystem.module.css";

function OurSystem() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Our Commitment to Fair Jewelry Trading</h2>
        </div>

        <div className={styles.textContainer}>
          <p className={styles.text}>
            A trusted marketplace depends on clear rules and consistent
            standards. At Karat Vault, every step of the transaction process is
            designed to provide transparency and predictability for both buyers
            and sellers.
          </p>
          <p className={styles.text}>
            From how items are verified and stored, to how pricing references
            are calculated and fees are disclosed, our goal is to ensure that
            every transaction is handled with clarity and fairness.
          </p>
        </div>

        <div className={styles.featureContainer}>
          <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper}>
              <img src="/features/feature-1.jpg" alt="a jewelry box" />
            </div>
            <div className={styles.featureTextWrapper}>
              <p className={styles.featureTitle}>Secure Transactions</p>
              <p className={styles.featureText}>
                When a seller ships an item to Karat Vault, we verify it, list
                it for sale, and store it safely in our secure facility. Your
                payment details are never shared with sellers, and all personal
                information is handled with strict privacy protection.
              </p>
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper}>
              <img src="/features/feature-2.jpg" alt="gold bars" />
            </div>
            <div className={styles.featureTextWrapper}>
              <p className={styles.featureTitle}>Fair, Market-Based Pricing</p>
              <p className={styles.featureText}>
                The minimum starting price is calculated automatically based on
                the seller’s original purchase price and the gold market price
                on the listing date. Sellers may adjust their desired price
                during listing submission, and buyers can update their offers at
                any time before the bidding deadline.
              </p>
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper}>
              <img src="/features/feature-3.jpg" alt="gold jewelry" />
            </div>
            <div className={styles.featureTextWrapper}>
              <p className={styles.featureTitle}>Transparent Fees</p>
              <p className={styles.featureText}>
                Karat Vault charges a flat 8% fee. Additional costs such as card
                processing fees, duties, and taxes are paid by the buyer and may
                vary depending on the destination country.
              </p>
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper}>
              <img src="/features/feature-4.png" alt="karat vault parcel" />
            </div>
            <div className={styles.featureTextWrapper}>
              <p className={styles.featureTitle}>Verified Fulfillment</p>
              <p className={styles.featureText}>
                Once an item is sold, Karat Vault manages the packing and
                shipping process directly to the buyer. Because items remain
                stored in our facility until the transaction is completed,
                shipments can be prepared securely and delivered safely to their
                new owner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSystem;
