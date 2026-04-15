import { useEffect, useReducer } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from "./MyListings.module.css";

const tempActiveListings = [
  {
    id: 3018,
    image: "/products/3018.webp",
    name: "Yellow gold long chain necklace",
    category: "necklace",
    material: "14k",
    condition: "very good",
    description:
      "14k yellow gold long chain necklace, 60cm length. Smooth links with light wear near clasp.",
    sellerId: 818,
    askingPrice: 7900,
    currentBid: 9100,
    currency: "USD",
    highestBidderId: "user_248",
    listedAt: "2026-08-18",
    dueDate: "2026-11-28",
    isForSale: true,
    offerCount: 35,
    weight: 18.8,
  },
  {
    id: 3019,
    image: "/products/3019.webp",
    name: "White gold oval link bracelet",
    category: "bracelet",
    material: "18k",
    condition: "slightly scratched",
    description:
      "18k white gold oval link bracelet, 17cm length. Minor scratches on links, clasp secure.",
    sellerId: 819,
    askingPrice: 9600,
    currentBid: 10850,
    currency: "USD",
    highestBidderId: "user_376",
    listedAt: "2026-07-09",
    dueDate: "2026-10-02",
    isForSale: true,
    offerCount: 27,
    weight: 21.2,
  },
  {
    id: 3020,
    image: "/products/3020.webp",
    name: "Yellow gold pavé hoop earrings",
    category: "earrings",
    material: "18k",
    condition: "very good",
    description:
      "18k yellow gold pavé hoop earrings with stones set on the front face. Diameter approx. 2.2cm. Excellent condition.",
    sellerId: 820,
    askingPrice: 8300,
    currentBid: 9950,
    currency: "USD",
    highestBidderId: "user_501",
    listedAt: "2026-09-27",
    dueDate: "2026-12-15",
    isForSale: true,
    offerCount: 41,
    weight: 6.9,
  },
];

const tempSoldItems = [
  {
    id: 3015,
    image: "/products/3015.webp",
    name: "Yellow gold bangle bracelet",
    category: "bracelet",
    material: "18k",
    condition: "good",
    description:
      "Solid 18k yellow gold bangle bracelet, inner diameter approx. 6cm. Visible wear marks from frequent use.",
    sellerId: 815,
    askingPrice: 8900,
    currentBid: 10400,
    currency: "USD",
    highestBidderId: "user_333",
    listedAt: "2026-05-15",
    dueDate: "2026-08-18",
    isForSale: true,
    offerCount: 29,
    weight: 26.3,
  },
  {
    id: 3016,
    image: "/products/3016.webp",
    name: "White gold stud earrings",
    category: "earrings",
    material: "14k",
    condition: "very good",
    description:
      "14k white gold stud earrings, stone size approx. 4mm. Minimal wear, ideal for everyday use.",
    sellerId: 816,
    askingPrice: 2800,
    currentBid: 3450,
    currency: "USD",
    highestBidderId: "user_014",
    listedAt: "2026-10-05",
    dueDate: "2026-12-01",
    isForSale: true,
    offerCount: 16,
    weight: 2.1,
  },
  {
    id: 3017,
    image: "/products/3017.webp",
    name: "Pink gold vintage ring",
    category: "ring",
    material: "18k",
    condition: "good",
    description:
      "Vintage 18k pink gold ring, ring size US 7. Subtle patina from age, band remains sturdy.",
    sellerId: 817,
    askingPrice: 6100,
    currentBid: 7250,
    currency: "USD",
    highestBidderId: "user_198",
    listedAt: "2026-04-11",
    dueDate: "2026-07-22",
    isForSale: true,
    offerCount: 23,
    weight: 7.4,
  },
];

const tempExpiredListings = [
  {
    id: 3012,
    image: "/products/3012.webp",
    name: "Yellow gold flat band ring",
    category: "ring",
    material: "14k",
    condition: "scratched",
    description:
      "Wide 14k yellow gold flat band ring, ring size US 9. Noticeable surface scratches from long-term wear.",
    sellerId: 812,
    askingPrice: 3100,
    currentBid: 3550,
    currency: "USD",
    highestBidderId: "user_121",
    listedAt: "2026-01-19",
    dueDate: "2026-05-05",
    isForSale: true,
    offerCount: 26,
    weight: 8.2,
  },
  {
    id: 3013,
    image: "/products/3013.webp",
    name: "Pink gold chain bracelet",
    category: "bracelet",
    material: "18k",
    condition: "very good",
    description:
      "18k pink gold chain bracelet, 18cm length. Well maintained with strong links and smooth finish.",
    sellerId: 813,
    askingPrice: 7400,
    currentBid: 8600,
    currency: "USD",
    highestBidderId: "user_277",
    listedAt: "2026-09-01",
    dueDate: "2026-12-20",
    isForSale: true,
    offerCount: 34,
    weight: 19.6,
  },
];

const initialState = {
  sort: "active",
};

function reducer(state, action) {
  switch (action.type) {
    case "changeSort":
      return { ...state, sort: action.payload };
  }
}

function MyListings() {
  const navigate = useNavigate();
  const { finishLoading } = useOutletContext();
  const [{ sort }, dispatch] = useReducer(reducer, initialState);

  const listItems =
    sort === "active"
      ? tempActiveListings
      : sort === "sold"
      ? tempSoldItems
      : tempExpiredListings;

  function handleSort(payload) {
    dispatch({ type: "changeSort", payload: payload });
  }

  function handleMovePage(id) {
    navigate(`/item/${id}`);
  }

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return (
    <section className={styles.section}>
      <div className={styles.sortContainer}>
        <button
          className={styles.sortButton}
          onClick={() => handleSort("active")}
        >
          Active Listings: {tempActiveListings.length}
        </button>

        <button
          className={styles.sortButton}
          onClick={() => handleSort("sold")}
        >
          Sold Items: {tempSoldItems.length}
        </button>

        <button
          className={styles.sortButton}
          onClick={() => handleSort("expired")}
        >
          Expired Listings: {tempExpiredListings.length}
        </button>
      </div>

      <div className={styles.listContainer}>
        {listItems.map((item) => (
          <div
            className={styles.listItem}
            key={item.id}
            onClick={() => handleMovePage(item.id)}
          >
            <div className={styles.imgContainer}>
              <img src={item.image} alt={item.name} className={styles.image} />
            </div>
            <div className={styles.infoContainer}>
              <h3 className={styles.title}>{item.name}</h3>
              <dl className={styles.itemInfo}>
                <dt>Starting Price</dt>
                <dd>{`$${item.askingPrice}`}</dd>

                {sort === "sold" ? (
                  <>
                    <dt>Final Price</dt>
                    <dd className={styles.finalBid}>{`$${
                      item.currentBid + 100
                    }`}</dd>
                  </>
                ) : sort === "active" ? (
                  <>
                    <dt>Current Bid</dt>
                    <dd className={styles.bid}>{`$${item.currentBid}`}</dd>
                  </>
                ) : (
                  <></>
                )}

                <dt>Offer Count</dt>
                <dd>{sort === "expired" ? 0 : item.offerCount}</dd>

                <dt>Due Date</dt>
                <dd>{item.dueDate}</dd>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyListings;
