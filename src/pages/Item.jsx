import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import styles from "./Item.module.css";
import { useProduct } from "../hooks/useProducts";
import ErrorMessage from "../components/ErrorMessage";
import { useLoadingProgress } from "../contexts/LoadingProgressContext";
import { useEffect } from "react";

function Item() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useProduct(Number(id));
  const { start, finish } = useLoadingProgress();

  useEffect(() => {
    if (isLoading) {
      start();
    } else {
      finish();
    }
  }, [isLoading, start, finish]);

  if (isLoading) return null;

  if (error) return <ErrorMessage message={error.message} />;

  if (!product) return <p>There is no item.</p>;

  return (
    <div className={styles.container}>
      <ItemDetail item={product} />
    </div>
  );
}

export default Item;
