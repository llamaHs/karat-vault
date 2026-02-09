import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={`${styles.col} ${styles.colLogo}`}>
          <img src="/logo-main-serif-short.png" alt="KaratVault logo" />
          <p className={styles.copyright}>
            © 2026 by Karat Vault All right reserved.
          </p>
          <ul className={styles.term}>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <p>|</p>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.linkTitle}>ABOUT US</p>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.linkTitle}>ACCOUNT</p>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Create Account</a>
            </li>
            <li>
              <a href="#">My Transactions</a>
            </li>
            <li>
              <a href="#">Payment Information</a>
            </li>
            <li>
              <a href="#">Wish List</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.linkTitle}>CONTANT US</p>
          <div className={styles.contacts}>
            <address className={styles.address}>
              45 Aurora Lane, Suite 1203 San Francisco, CA 94105 United States
            </address>
            <a className={styles.tel} href="tel:+1 (415) 555-8724">
              +1 (415) 555-8724
            </a>
            <a className={styles.email} href="mailto:contact@karatvault.com">
              contact@karatvault.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
