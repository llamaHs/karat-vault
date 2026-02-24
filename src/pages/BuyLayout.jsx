import { Outlet, useOutletContext } from "react-router-dom";
import styles from "./BuyLayout.module.css";

function BuyLayout() {
  const context = useOutletContext();

  return (
    <div className={styles.container}>
      <Outlet context={context} />
    </div>
  );
}

export default BuyLayout;
