import { Outlet } from "react-router-dom";
import styles from "./BuyLayout.module.css";

function BuyLayout() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}

export default BuyLayout;
