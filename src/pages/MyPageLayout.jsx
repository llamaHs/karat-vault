import { NavLink, Outlet } from "react-router-dom";
import styles from "./MyPageLayout.module.css";

function MyPageLayout({ finishLoading }) {
  return (
    <section className={styles.section}>
      <nav className={styles.navigation}>
        <NavLink
          to="bids"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          My Bids
        </NavLink>
        <NavLink
          to="listings"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          My Listings
        </NavLink>
        <NavLink
          to="wishlist"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Wishlist
        </NavLink>
        <NavLink
          to="payment-methods"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Payment Methods
        </NavLink>
        <NavLink
          to="account-settings"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Account Settings
        </NavLink>
      </nav>
      <Outlet context={{ finishLoading }} />
    </section>
  );
}

export default MyPageLayout;
