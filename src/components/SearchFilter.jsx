import { useRef, useState, useEffect } from "react";
import styles from "./SearchFilter.module.css";

function SearchFilter() {
  const [range, setRange] = useState(5000);
  const [tooltipLeft, setTooltipLeft] = useState(0);
  const rangeRef = useRef(null);

  function handleRange(newRange) {
    setRange(Number(newRange));
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
            <div className={styles.option}>
              <img
                src="./icons/ring-icon.png"
                alt="a ring icon"
                className={styles.image}
              />
              <p>RING</p>
            </div>

            <div className={styles.option}>
              <img
                src="./icons/necklace-icon.png"
                alt="a necklace icon"
                className={styles.image}
              />
              <p>NECKLACE</p>
            </div>

            <div className={styles.option}>
              <img
                src="./icons/earrings-icon.png"
                alt="a pair of earrings icon"
                className={styles.image}
              />
              <p>EARRINGS</p>
            </div>

            <div className={styles.option}>
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
            <div className={styles.option}>
              <div className={styles.icon14k} />
              <p>14K GOLD</p>
            </div>

            <div className={styles.option}>
              <div className={styles.icon18k} />
              <p>18K GOLD</p>
            </div>

            <div className={styles.option}>
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
                {range}
              </span>
              <input
                ref={rangeRef}
                type="range"
                min="0"
                max="10000"
                step="10"
                className={styles.range}
                value={range}
                onChange={(e) => handleRange(e.target.value)}
              />
            </div>
            <p className={styles.bidNum}>10000</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchFilter;
