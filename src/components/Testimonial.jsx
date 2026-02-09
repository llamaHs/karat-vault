import styles from "./Testimonial.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Testimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Trusted by Our Customers</h2>
          <p>
            Real experiences from buyers and sellers using Karat Vault for gold
            jewelry trading.
          </p>
        </div>

        <div className={styles.reviewContainer}>
          <button className={styles.btnLeft}>
            <FaChevronLeft className={styles.btnIcon} />
          </button>
          <button className={styles.btnRight}>
            <FaChevronRight className={styles.btnIcon} />
          </button>

          {/* --- 1 --- */}
          <div className={styles.review}>
            <p className={styles.reviewContent}>
              “I liked that pricing was clearly tied to the market. I placed an
              offer, adjusted it once, and the process was straightforward.
              Everything felt transparent from start to finish.”
            </p>
            <div className={styles.profile}>
              <div className={styles.profileImg}>
                <img src="./daniel.jpg" />
              </div>
              <div className={styles.profileText}>
                <p className={styles.profileName}>Daniel Robinson</p>
                <p className={styles.date}>2 days ago</p>
              </div>
            </div>
          </div>

          {/* --- 2 --- */}
          <div className={styles.review}>
            <p className={styles.reviewContent}>
              “Selling felt more structured than other platforms I’ve tried. The
              pricing guidance helped a lot, and I appreciated knowing exactly
              how fees were calculated before listing.”
            </p>
            <div className={styles.profile}>
              <div className={styles.profileImg}>
                <img src="./minji.jpg" />
              </div>
              <div className={styles.profileText}>
                <p className={styles.profileName}>Minji Park</p>
                <p className={styles.date}>1 week ago</p>
              </div>
            </div>
          </div>

          {/* --- 3 --- */}
          <div className={styles.review}>
            <p className={styles.reviewContent}>
              “I was hesitant at first, but the process was smooth. The item
              arrived exactly as described, and payment was handled cleanly
              without any back-and-forth.”
            </p>
            <div className={styles.profile}>
              <div className={styles.profileImg}>
                <img src="./amber.jpg" />
              </div>
              <div className={styles.profileText}>
                <p className={styles.profileName}>Amber Davis</p>
                <p className={styles.date}>2 months ago</p>
              </div>
            </div>
          </div>

          {/* --- 4 --- */}

          {/* --- 5 --- */}

          {/* --- 6 --- */}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
