import { Outlet, useOutletContext } from "react-router-dom";
import styles from "./HotItemsLayout.module.css";

function HotItemsLayout() {
  const context = useOutletContext();

  return (
    <div className={styles.container}>
      <Outlet context={context} />
    </div>
  );
}

export default HotItemsLayout;
