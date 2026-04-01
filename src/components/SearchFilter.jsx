import { useRef, useState, useEffect } from "react";
import styles from "./SearchFilter.module.css";

function SearchFilter({ category, material, range, dispatch }) {
  const [tooltipLeft, setTooltipLeft] = useState(0);
  const rangeRef = useRef(null);

  function handleCategory(newCategory) {
    if (category === newCategory) {
      dispatch({ type: "resetCategory" });
      return;
    }

    dispatch({ type: "changeCategory", payload: newCategory });
  }

  function handleMaterial(newMaterial) {
    if (material === newMaterial) {
      dispatch({ type: "resetMaterial" });
      return;
    }

    dispatch({ type: "changeMaterial", payload: newMaterial });
  }

  function handleRange(newRange) {
    dispatch({ type: "changeRange", payload: Number(newRange) });
  }

  useEffect(() => {
    const el = rangeRef.current;
    if (!el) return;

    const min = Number(el.min);
    const max = Number(el.max);

    const percent = (range - min) / (max - min);
    const width = el.offsetWidth;
    const thumbSize = 10;
    const usableWidth = width - thumbSize;

    const position = percent * usableWidth + thumbSize / 2;

    setTooltipLeft(position);
  }, [range]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.categoryFilter}>
          <p className={styles.title}>BY CATEGORY</p>

          <div className={styles.optionContainer}>
            <div
              className={`${styles.option} ${
                category === "ring" ? styles.active : ""
              }`}
              onClick={() => handleCategory("ring")}
            >
              <img
                src="./icons/ring-icon.png"
                alt="a ring icon"
                className={styles.image}
              />
              <p>RING</p>
            </div>

            <div
              className={`${styles.option} ${
                category === "necklace" ? styles.active : ""
              }`}
              onClick={() => handleCategory("necklace")}
            >
              <img
                src="./icons/necklace-icon.png"
                alt="a necklace icon"
                className={styles.image}
              />
              <p>NECKLACE</p>
            </div>

            <div
              className={`${styles.option} ${
                category === "earrings" ? styles.active : ""
              }`}
              onClick={() => handleCategory("earrings")}
            >
              <img
                src="./icons/earrings-icon.png"
                alt="a pair of earrings icon"
                className={styles.image}
              />
              <p>EARRINGS</p>
            </div>

            <div
              className={`${styles.option} ${
                category === "bracelet" ? styles.active : ""
              }`}
              onClick={() => handleCategory("bracelet")}
            >
              <img
                src="./icons/bracelet-icon.png"
                alt="a bracelet icon"
                className={styles.image}
              />
              <p>BRACELET</p>
            </div>
          </div>
        </div>

        <div className={styles.materialFilter}>
          <p className={styles.title}>BY MATERIAL</p>

          <div className={styles.optionContainer}>
            <div
              className={`${styles.option} ${
                material === "14k" ? styles.active : ""
              }`}
              onClick={() => handleMaterial("14k")}
            >
              <div className={styles.icon14k} />
              <p>14K GOLD</p>
            </div>

            <div
              className={`${styles.option} ${
                material === "18k" ? styles.active : ""
              }`}
              onClick={() => handleMaterial("18k")}
            >
              <div className={styles.icon18k} />
              <p>18K GOLD</p>
            </div>

            <div
              className={`${styles.option} ${
                material === "gemstone" ? styles.active : ""
              }`}
              onClick={() => handleMaterial("gemstone")}
            >
              <div className={styles.iconGemstone} />
              <p>GEMSTONES</p>
            </div>
          </div>
        </div>

        <div className={styles.bidFilter}>
          <p className={styles.bidRange}>MAXIMUM BID</p>
          <div className={styles.bidContainer}>
            <p className={styles.bidNum}>0</p>
            <div className={styles.rangeContainer}>
              <span className={styles.rangeValue} style={{ left: tooltipLeft }}>
                {range.toLocaleString()}
              </span>
              <input
                ref={rangeRef}
                type="range"
                min="0"
                max="30000"
                step="500"
                className={styles.range}
                value={range}
                onChange={(e) => handleRange(e.target.value)}
              />
            </div>
            <p className={styles.bidNum}>30,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchFilter;
