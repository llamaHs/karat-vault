import { useOutletContext } from "react-router-dom";
import styles from "../pages/Buy.module.css";
import ItemList from "../components/ItemList";
import SearchFilter from "../components/SearchFilter";
import PageTitle from "../components/PageTitle";
import { useEffect, useReducer } from "react";

const initialState = {
  category: "",
  material: "",
  range: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "changeCategory":
      return { ...state, category: action.payload };

    case "changeMaterial":
      return { ...state, material: action.payload };

    case "changeRange":
      return { ...state, range: action.payload };

    case "resetCategory":
      return { ...state, category: "" };

    case "resetMaterial":
      return { ...state, material: "" };

    default:
      return state;
  }
}

function Buy() {
  const { finishLoading } = useOutletContext();
  const [{ category, material, range }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return (
    <div className={styles.container}>
      <PageTitle
        img="./backgrounds/background-title-2-1.png"
        heading="Bid on Pieces"
        subHeading="Explore fine gold and jewelry listings available for competitive bidding now."
      />
      <SearchFilter
        category={category}
        material={material}
        range={range}
        dispatch={dispatch}
      />
      <ItemList category={category} material={material} maxBid={range} />
    </div>
  );
}

export default Buy;
