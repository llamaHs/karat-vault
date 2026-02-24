import styles from "./Feature.module.css";
import { CiLock } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { CiCreditCard1 } from "react-icons/ci";

function AboutUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.recordContainer}>
          <div className={styles.record}>
            <p className={styles.recordNum}>2026</p>
            <p className={styles.recordTitle}>Established</p>
          </div>
          <div className={styles.record}>
            <p className={styles.recordNum}>10k+</p>
            <p className={styles.recordTitle}>Customers</p>
          </div>
          <div className={styles.record}>
            <p className={styles.recordNum}>5k+</p>
            <p className={styles.recordTitle}>Pieces Traded</p>
          </div>
        </div>

        <div className={styles.featureContainer}>
          {/* --- 1 --- */}
          <div className={styles.featureHeading}>
            <div className={styles.heading}>
              <p className={styles.sectionTitle}>OUR SYSTEM</p>
              <h3>Secure Transactions</h3>
            </div>

            <div className={styles.featureText}>
              <p>
                When a seller ships an item to Karat Vault, we verify it, list
                it for sale, and store it safely in our secure facility.
              </p>
              <p>
                Your payment details are never shared with sellers, and all user
                personal information is protected.
              </p>
            </div>
          </div>

          <div className={styles.featureImg}>
            <img
              src="./icons/icon-background.png"
              alt="circle background image for icon"
            />
            <CiLock className={styles.icon} />
          </div>

          {/* --- 2 --- */}
          <div className={styles.featureImg}>
            <img
              src="./icons/icon-background.png"
              alt="circle background image for icon"
            />
            <GoGraph className={styles.icon} />
          </div>

          <div className={styles.featureHeading}>
            <div className={styles.heading}>
              <h3>Fair, Market-Based Pricing</h3>
            </div>

            <div className={styles.featureText}>
              <p>
                The minimum starting price is calculated automatically based on
                the seller’s original purchase price and the the gold market
                price on the listing date. Sellers may adjust their desired
                price during listing submission.
              </p>
              <p>
                Buyers can also update their offers at any time before the
                bidding deadline through My Page.
              </p>
            </div>
          </div>

          {/* --- 3 --- */}
          <div className={styles.featureHeading}>
            <div className={styles.heading}>
              <h3>Transparent Fees</h3>
            </div>

            <div className={styles.featureText}>
              <p>
                Karat Vault charges a flat <strong>7%</strong> fee.
              </p>
              <p>
                Additional costs such as card processing fees, duties, and taxes
                are paid by the buyer and may vary depending on the destination
                country.
              </p>
            </div>
          </div>

          <div className={styles.featureImg}>
            <img
              src="./icons/icon-background.png"
              alt="circle background image for icon"
            />
            <CiCreditCard1 className={styles.icon} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
