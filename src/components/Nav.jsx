import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Nav.module.css";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

function Nav({ startLoading }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const trigger = document.querySelector("#nav-trigger");
    // 특정 id 가진 element 감지

    if (!trigger) return;

    const observer = new IntersectionObserver(
      // const entry = entries[0];
      // destructuring (첫 번째 element 꺼냄)
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
        // 기준(nav-trigger)이 밑에서부터 올라와서 위로 나가 안 보이는 순간부터 nav가 sticky되어야 하니까
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(trigger);

    return () => observer.disconnect();
  });

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
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
