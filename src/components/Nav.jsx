import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Nav.module.css";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

function Nav({ startLoading }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLeft}>
        <li>
          <NavLink
            to="hot-items"
            className={({ isActive }) =>
              `${styles.link} ${styles.hotItems} ${
                isActive ? styles.active : ""
              }`
            }
            onClick={startLoading}
          >
            Hot Items
          </NavLink>
        </li>
        <li>
          <NavLink
            to="buy"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            onClick={startLoading}
          >
            Buy
          </NavLink>
        </li>
        <li>
          <NavLink
            to="sell"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            onClick={startLoading}
          >
            Sell
          </NavLink>
        </li>

        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            onClick={startLoading}
          >
            About
          </NavLink>
        </li>
      </ul>

      <NavLink to="/">
        <Logo />
      </NavLink>

      <ul className={styles.navRight}>
        <li>
          <NavLink
            to="mypage"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            onClick={startLoading}
          >
            My Page
          </NavLink>
        </li>
        <li>
          <select className={styles.currency}>
            <option value={"USD"}>USD $ 🇺🇸</option>
            <option value={"AUD"}>AUD $ 🇦🇺</option>
            <option value={"CAD"}>CAD $ 🇨🇦</option>
            <option value={"EURO"}>EUR € 🇪🇺</option>
            <option value={"GBP"}>GBP £ 🇬🇧</option>
            <option value={"KOR"}>KOR ₩ 🇰🇷</option>
          </select>
        </li>

        <li>
          <div className={styles.navIconContainer}>
            <IoCartOutline className={styles.iconCart} />
            <IoSearchOutline className={styles.iconSearch} />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
