import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { useAuth } from "../contexts/AuthContext";

function Footer() {
  const { user } = useAuth();

  return (
    <footer>
      <div className={styles.container}>
        <div className={`${styles.col} ${styles.colLogo}`}>
          <img src="/logo-main-serif-short.png" alt="KaratVault logo" />
          <p className={styles.copyright}>© 2026 Karat Vault</p>
          <ul className={styles.terms}>
            <li>
              <Link to="terms-and-conditions" className={styles.term}>
                Terms and Conditions
              </Link>
            </li>
            <li>
              <p>|</p>
            </li>
            <li>
              <Link to="privacy" className={styles.term}>
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.linkTitle}>ABOUT US</p>
          <ul className={styles.linkList}>
            <li>
              <Link to="/about">Our Story</Link>
            </li>
            <li>
              <Link to="/about#reviews">Reviews</Link>
              {/* {{ pathname: "/about", hash: "#reviews" }} */}
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/about#faq">FAQs</Link>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.linkTitle}>ACCOUNT</p>
          <ul className={styles.linkList}>
            {user ? (
              <li>
                <Link to="/mypage/account-settings">Account Settings</Link>
              </li>
            ) : (
              <li>
                <Link to="/signup">Create Account</Link>
              </li>
            )}
            <li>
              <Link to="/mypage/bids">My Transactions</Link>
            </li>
            <li>
              <Link to="/mypage/payment-methods">Payment Information</Link>
            </li>
            <li>
              <Link to="/mypage/wishlist">Wishlist</Link>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.linkTitle}>CONTACT US</p>
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
