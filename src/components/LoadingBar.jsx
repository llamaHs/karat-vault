import styles from "./LoadingBar.module.css";
import { useLoadingProgress } from "../contexts/LoadingProgressContext";

function LoadingBar() {
  const { isLoading, progress } = useLoadingProgress();

  if (!isLoading) return null;

  return (
    <div className={styles.container}>
      <div className={styles.bar} style={{ width: `${progress}%` }}></div>
    </div>
  );
}

export default LoadingBar;
