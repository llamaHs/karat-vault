import { Outlet } from "react-router-dom";
import styles from "./HotItemsLayout.module.css";

function HotItemsLayout() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}

export default HotItemsLayout;
