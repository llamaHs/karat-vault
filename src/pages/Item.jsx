import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import styles from "./Item.module.css";
import { useProduct } from "../hooks/useProducts";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function Item() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useProduct(Number(id));

  if (isLoading) return <Spinner />;

  if (error) return <ErrorMessage message={error.message} />;

  if (!product) return <p>There is no item.</p>;

  return (
    <div className={styles.container}>
      <ItemDetail item={product} />
    </div>
  );
}

export default Item;
