import { useParams } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";
import ItemDetail from "../components/ItemDetail";
import styles from "./Item.module.css";

function Item() {
  const { id } = useParams();
  const { products } = useProduct();

  const product = products.find((p) => String(p.id) === id);
  if (!product) return <p>There is no item.</p>;

  return (
    <div className={styles.container}>
      <ItemDetail item={product} />
    </div>
  );
}

export default Item;
