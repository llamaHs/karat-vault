import { useSearchParams } from "react-router-dom";
import styles from "../pages/Buy.module.css";
import ItemList from "../components/ItemList";
import SearchFilter from "../components/SearchFilter";
import PageTitle from "../components/PageTitle";
import { useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducers/filterReducer";

function Buy() {
  const [{ category, material, range }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  // state -> URL
  useEffect(() => {
    const params = {};

    if (search) params.search = search;
    if (category) params.category = category;
    if (material) params.material = material;
    if (range !== 0) params.range = range;

    setSearchParams(params, { replace: true });
  }, [category, material, range, search, setSearchParams]);

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
        img="./backgrounds/background-title-2-1.webp"
        heading="Bid on Pieces"
        subHeading="Explore fine gold and jewelry listings available for competitive bidding now."
        alt="gold jewelry"
      />
      <SearchFilter
        category={category}
        material={material}
        range={range}
        dispatch={dispatch}
      />
      <ItemList
        category={category}
        material={material}
        maxBid={range}
        search={search}
      />
    </div>
  );
}

export default Buy;
