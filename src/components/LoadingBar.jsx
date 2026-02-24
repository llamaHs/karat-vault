import styles from "./LoadingBar.module.css";

function LoadingBar({ isLoading, progress }) {
  if (!isLoading) return null;

  return (
    <div className={styles.container}>
      <div className={styles.bar} style={{ width: `${progress}%` }}></div>
    </div>
  );
}

export default LoadingBar;
