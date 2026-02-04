import styles from "./Logo.module.css";

function Logo() {
  return (
    <img
      src="/logo-main-serif-short.png"
      alt="KaratVault logo"
      className={styles.logo}
    />
  );
}

export default Logo;
