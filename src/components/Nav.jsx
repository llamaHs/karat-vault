import Logo from "./Logo";
import styles from "./Nav.module.css";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLeft}>
        <li>
          <a href="#" className={styles.hotItems}>
            Hot Items
          </a>
        </li>
        <li>
          <a href="#">Buy</a>
        </li>
        <li>
          <a href="#">Sell</a>
        </li>

        <li>
          <a href="#">About</a>
        </li>
      </ul>

      <Logo />

      <ul className={styles.navRight}>
        <li>
          <a href="#">My Page</a>
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
