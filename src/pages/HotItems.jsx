import { useOutletContext, useSearchParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import PageTitle from "../components/PageTitle";
import SearchFilter from "../components/SearchFilter";
import styles from "./HotItems.module.css";
import { useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducers/filterReducer";

function HotItems() {
  const { finishLoading } = useOutletContext();
  const [{ category, material, range }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  // state -> URL
  useEffect(() => {
    const params = {};

    if (category) params.category = category;
    if (material) params.material = material;
    if (range !== 0) params.range = range;

    setSearchParams(params, { replace: true });
  }, [category, material, range]);

  // URL -> state
  useEffect(() => {
    const categoryParam = searchParams.get("category") || "";
    const materialParam = searchParams.get("material") || "";
    const rangeParam = Number(searchParams.get("range")) || 0;

    dispatch({ type: "changeCategory", payload: categoryParam });
    dispatch({ type: "changeMaterial", payload: materialParam });
    dispatch({ type: "changeRange", payload: rangeParam });
  }, [searchParams]);

  return (
    <div className={styles.container}>
      <PageTitle
        img="./backgrounds/background-title-1.png"
        heading="Popular Pieces Right Now"
        subHeading="Discover trending gold and jewelry pieces loved by our customers."
      />
      <SearchFilter
        category={category}
        material={material}
        range={range}
        dispatch={dispatch}
      />
      <ItemList
        listType={"hot"}
        category={category}
        material={material}
        maxBid={range}
      />
    </div>
  );
}

export default HotItems;
