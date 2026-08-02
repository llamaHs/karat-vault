import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Nav.module.css";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useCurrency } from "../contexts/CurrencyContext";

function Nav({ startLoading }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { currency, setCurrency } = useCurrency();

  const { isAuthenticated, logout } = useAuth();

  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const enableScrollNav = pathname === "/";

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  function handleSearchSubmit(e) {
    e.preventDefault();

    const keyword = searchValue.trim();
    if (!keyword) return;

    navigate(`buy?search=${encodeURIComponent(keyword)}`);
    setSearchOpen(false);
  }

  useEffect(() => {
    if (!enableScrollNav) {
      setScrolled(false);
      return;
    }

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
      <div className={styles.container}>
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
          {isAuthenticated ? (
            <li className={styles.myPageItem}>
              <NavLink
                to="mypage"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.link
                }
                onClick={startLoading}
              >
                My Page
              </NavLink>

              <div className={styles.dropdown}>
                <NavLink className={styles.navDropdownMenu} to="mypage/bids">
                  My Bids
                </NavLink>
                <NavLink
                  className={styles.navDropdownMenu}
                  to="mypage/listings"
                >
                  My Listings
                </NavLink>
                <NavLink
                  className={styles.navDropdownMenu}
                  to="mypage/wishlist"
                >
                  Wishlist
                </NavLink>
                <NavLink
                  className={styles.navDropdownMenu}
                  to="mypage/payment-methods"
                >
                  Payment Methods
                </NavLink>
                <NavLink
                  className={styles.navDropdownMenu}
                  to="mypage/account-settings"
                >
                  Account Settings
                </NavLink>
                <button className={styles.logoutButton} onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </li>
          ) : (
            <li>
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.link
                }
              >
                Login
              </NavLink>
            </li>
          )}
          <li>
            <select
              className={styles.currency}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value={"USD"}>USD $ 🇺🇸</option>
              <option value={"AUD"}>AUD $ 🇦🇺</option>
              <option value={"CAD"}>CAD $ 🇨🇦</option>
              <option value={"EUR"}>EUR € 🇪🇺</option>
              <option value={"GBP"}>GBP £ 🇬🇧</option>
              <option value={"KRW"}>KOR ₩ 🇰🇷</option>
            </select>
          </li>

          <li>
            <div className={styles.navIconContainer}>
              <Link to="mypage/wishlist">
                <IoMdHeartEmpty className={styles.iconWishList} />
              </Link>

              <button
                type="button"
                className={styles.searchButton}
                onClick={() => setSearchOpen((open) => !open)}
                aria-label="Open search"
              >
                <IoSearchOutline className={styles.iconSearch} />
              </button>
            </div>
          </li>
        </ul>
      </div>

      {searchOpen && (
        <div className={styles.searchBar}>
          <form className={styles.searchInner} onSubmit={handleSearchSubmit}>
            <IoSearchOutline className={styles.searchBarIcon} />

            <input
              type="text"
              value={searchValue}
              className={styles.searchInput}
              placeholder="Search by item name, category, or material"
              autoFocus
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <button
              type="button"
              className={styles.searchCloseButton}
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              <IoCloseOutline />
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}

export default Nav;
