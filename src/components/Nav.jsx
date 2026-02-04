import Logo from "./Logo";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#">Hot Items</a>
        </li>
        <li>
          <a href="#">Buy</a>
        </li>
        <li>
          <a href="#">Sell</a>
        </li>
      </ul>

      <Logo />

      <ul>
        <li>
          <a href="#">My Page</a>
        </li>
        <li>
          <select>
            <option value={"USD"}>USD 🇺🇸</option>
            <option value={"AUD"}>AUD 🇦🇺</option>
            <option value={"CAD"}>CAD 🇨🇦</option>
            <option value={"EURO"}>EURO 🇪🇺</option>
            <option value={"GBP"}>GBP 🇬🇧</option>
            <option value={"KOR"}>KOR 🇰🇷</option>
          </select>
        </li>

        <li>
          <ion-icon className={styles.iconCart} name="cart-outline"></ion-icon>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
