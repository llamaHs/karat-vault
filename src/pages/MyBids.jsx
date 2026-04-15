import { useEffect, useReducer, useState } from "react";
import {
  useNavigate,
  useOutletContext,
  useSearchParams,
} from "react-router-dom";
import styles from "./MyBids.module.css";

const tempBidItems = [
  {
    id: 2001,
    image: "/products/2001.webp",
    name: "Yellow gold flower ring",
    category: "ring",
    material: "14k",
    condition: "very good",
    description:
      "14k yellow gold flower ring with a glossy finish. Ring size US 6.5. Light wear on the underside only; overall looks bright and clean.",
    sellerId: 701,
    askingPrice: 980,
    currentBid: 1120,
    currency: "USD",
    highestBidderId: "user_18",
    listedAt: "2026-02-03",
    dueDate: "2026-02-17",
    isForSale: true,
    offerCount: 6,
    weight: 3.2,
  },
  {
    id: 2002,
    image: "/products/2002.webp",
    name: "White gold cable chain necklace",
    category: "necklace",
    material: "18k",
    condition: "good",
    description:
      "18k white gold cable chain necklace, 45cm length. Clasp works smoothly; faint surface marks from regular wear.",
    sellerId: 702,
    askingPrice: 1250,
    currentBid: 1310,
    currency: "USD",
    highestBidderId: "user_44",
    listedAt: "2025-11-28",
    dueDate: "2026-02-25",
    isForSale: true,
    offerCount: 3,
    weight: 6.8,
  },
  {
    id: 2003,
    image: "/products/2003.webp",
    name: "Pink gold heart stud earrings",
    category: "earrings",
    material: "14k",
    condition: "new",
    description:
      "Brand new 14k pink gold heart studs. Heart size approx. 5mm. Never worn; includes original backs.",
    sellerId: 703,
    askingPrice: 420,
    currentBid: 420,
    currency: "USD",
    highestBidderId: null,
    listedAt: "2026-02-08",
    dueDate: "2026-02-28",
    isForSale: true,
    offerCount: 0,
    weight: 1.4,
  },
  {
    id: 2004,
    image: "/products/2004.webp",
    name: "Gemstone tennis bracelet",
    category: "bracelet",
    material: "gemstone",
    condition: "slightly scratched",
    description:
      "Gemstone tennis bracelet in white gold tone. Length 17cm. Minor scratches near the clasp; stones secure and sparkle well.",
    sellerId: 704,
    askingPrice: 1680,
    currentBid: 1890,
    currency: "USD",
    highestBidderId: "user_92",
    listedAt: "2025-12-19",
    dueDate: "2026-03-05",
    isForSale: true,
    offerCount: 9,
    weight: 14.6,
  },
  {
    id: 2005,
    image: "/products/2005.webp",
    name: "Yellow gold minimalist band ring",
    category: "ring",
    material: "18k",
    condition: "good",
    description:
      "18k yellow gold band ring, ring size US 7.25. Noticeable hairline scratches from daily wear but no dents.",
    sellerId: 705,
    askingPrice: 760,
    currentBid: 845,
    currency: "USD",
    highestBidderId: "user_06",
    listedAt: "2025-10-11",
    dueDate: "2026-02-14",
    isForSale: true,
    offerCount: 4,
    weight: 5.1,
  },
  {
    id: 2006,
    image: "/products/2006.webp",
    name: "White gold drop earrings",
    category: "earrings",
    material: "18k",
    condition: "very good",
    description:
      "18k white gold drop earrings with a clean silhouette. Drop length ~3.2cm. Minimal wear, polished recently.",
    sellerId: 706,
    askingPrice: 990,
    currentBid: 1045,
    currency: "USD",
    highestBidderId: "user_27",
    listedAt: "2026-01-05",
    dueDate: "2026-01-26",
    isForSale: true,
    offerCount: 2,
    weight: 3.0,
  },
];

const tempCompletedAuction = [
  {
    id: 2007,
    image: "/products/2007.webp",
    name: "Pink gold charm bracelet",
    category: "bracelet",
    material: "14k",
    condition: "scratched",
    description:
      "14k pink gold charm bracelet, 18cm. Visible scratches throughout from frequent wear; clasp secure and functional.",
    sellerId: 707,
    askingPrice: 520,
    currentBid: 610,
    currency: "USD",
    highestBidderId: "user_73",
    listedAt: "2025-09-22",
    dueDate: "2026-02-20",
    isForSale: true,
    offerCount: 7,
    weight: 9.8,
  },
  {
    id: 2008,
    image: "/products/2008.webp",
    name: "Gemstone pendant necklace",
    category: "necklace",
    material: "gemstone",
    condition: "very good",
    description:
      "Gemstone pendant necklace in yellow gold tone. Chain length 50cm. Stone size approx. 7mm; minimal wear, great shine.",
    sellerId: 708,
    askingPrice: 640,
    currentBid: 790,
    currency: "USD",
    highestBidderId: "user_51",
    listedAt: "2026-02-01",
    dueDate: "2026-03-01",
    isForSale: true,
    offerCount: 8,
    weight: 5.6,
  },
  {
    id: 2009,
    image: "/products/2009.webp",
    name: "White gold eternity ring",
    category: "ring",
    material: "18k",
    condition: "good",
    description:
      "18k white gold eternity-style ring with small stones. Ring size US 6. Slight wear on the underside; stones intact.",
    sellerId: 709,
    askingPrice: 1750,
    currentBid: 1820,
    currency: "USD",
    highestBidderId: "user_11",
    listedAt: "2025-12-03",
    dueDate: "2026-02-09",
    isForSale: true,
    offerCount: 3,
    weight: 4.2,
  },
  {
    id: 2010,
    image: "/products/2010.webp",
    name: "Yellow gold hoop earrings",
    category: "earrings",
    material: "14k",
    condition: "very good",
    description:
      "14k yellow gold hoops, diameter ~2.8cm. Light marks from wear; hinges close tightly.",
    sellerId: 710,
    askingPrice: 310,
    currentBid: 405,
    currency: "USD",
    highestBidderId: "user_59",
    listedAt: "2025-11-09",
    dueDate: "2026-02-06",
    isForSale: true,
    offerCount: 10,
    weight: 2.6,
  },
  {
    id: 2011,
    image: "/products/2011.webp",
    name: "White gold paperclip bracelet",
    category: "bracelet",
    material: "18k",
    condition: "new",
    description:
      "New 18k white gold paperclip bracelet, 16.5cm length. Bright finish, never worn outside; clasp is smooth.",
    sellerId: 711,
    askingPrice: 1450,
    currentBid: 1450,
    currency: "USD",
    highestBidderId: null,
    listedAt: "2026-02-09",
    dueDate: "2026-03-02",
    isForSale: true,
    offerCount: 0,
    weight: 10.9,
  },
  {
    id: 2012,
    image: "/products/2012.webp",
    name: "Gemstone halo ring",
    category: "ring",
    material: "gemstone",
    condition: "slightly scratched",
    description:
      "Gemstone halo ring in white gold tone. Ring size US 5.5. Stone approx. 6mm center; light scratches on band, stones secure.",
    sellerId: 712,
    askingPrice: 380,
    currentBid: 520,
    currency: "USD",
    highestBidderId: "user_07",
    listedAt: "2025-08-14",
    dueDate: "2026-02-12",
    isForSale: true,
    offerCount: 12,
    weight: 3.7,
  },
  {
    id: 2013,
    image: "/products/2013.webp",
    name: "Pink gold station necklace",
    category: "necklace",
    material: "14k",
    condition: "very good",
    description:
      "14k pink gold station necklace, 40cm with 5cm extender. Small stones approx. 3mm each. Minimal wear, great layering piece.",
    sellerId: 713,
    askingPrice: 690,
    currentBid: 735,
    currency: "USD",
    highestBidderId: "user_63",
    listedAt: "2026-01-18",
    dueDate: "2026-03-12",
    isForSale: true,
    offerCount: 2,
    weight: 4.1,
  },
  {
    id: 2014,
    image: "/products/2014.webp",
    name: "Yellow gold huggie earrings",
    category: "earrings",
    material: "18k",
    condition: "good",
    description:
      "18k yellow gold huggie earrings, inner diameter ~9mm. Light wear on edges; closes firmly, comfortable for daily use.",
    sellerId: 714,
    askingPrice: 560,
    currentBid: 640,
    currency: "USD",
    highestBidderId: "user_24",
    listedAt: "2025-10-30",
    dueDate: "2026-02-22",
    isForSale: true,
    offerCount: 6,
    weight: 2.2,
  },
  {
    id: 2015,
    image: "/products/2015.webp",
    name: "Gemstone bar bracelet",
    category: "bracelet",
    material: "gemstone",
    condition: "very good",
    description:
      "Gemstone bar bracelet in rose gold tone, 17.5cm length. Bar stones approx. 12mm total. Very clean with minimal wear.",
    sellerId: 715,
    askingPrice: 410,
    currentBid: 555,
    currency: "USD",
    highestBidderId: "user_81",
    listedAt: "2025-12-27",
    dueDate: "2026-03-20",
    isForSale: true,
    offerCount: 9,
    weight: 7.4,
  },
  {
    id: 2016,
    image: "/products/2016.webp",
    name: "White gold solitaire-style ring",
    category: "ring",
    material: "14k",
    condition: "scratched",
    description:
      "14k white gold solitaire-style ring. Ring size US 6. Center stone approx. 5mm. Visible scratches on band from wear; stone secure.",
    sellerId: 716,
    askingPrice: 690,
    currentBid: 730,
    currency: "USD",
    highestBidderId: "user_13",
    listedAt: "2025-07-06",
    dueDate: "2026-02-16",
    isForSale: true,
    offerCount: 5,
    weight: 3.4,
  },
  {
    id: 2017,
    image: "/products/2017.webp",
    name: "Yellow gold pendant necklace",
    category: "necklace",
    material: "18k",
    condition: "good",
    description:
      "18k yellow gold pendant necklace, 46cm chain. Pendant diameter ~10mm. Normal signs of wear; pendant front still bright.",
    sellerId: 717,
    askingPrice: 1320,
    currentBid: 1405,
    currency: "USD",
    highestBidderId: "user_39",
    listedAt: "2025-11-17",
    dueDate: "2026-03-04",
    isForSale: true,
    offerCount: 4,
    weight: 8.9,
  },
  {
    id: 2018,
    image: "/products/2018.webp",
    name: "Pink gold small hoop earrings",
    category: "earrings",
    material: "14k",
    condition: "very good",
    description:
      "14k pink gold small hoops, diameter ~1.8cm. Light surface marks only; hinges and clasp work perfectly.",
    sellerId: 718,
    askingPrice: 260,
    currentBid: 355,
    currency: "USD",
    highestBidderId: "user_58",
    listedAt: "2026-02-06",
    dueDate: "2026-02-21",
    isForSale: true,
    offerCount: 7,
    weight: 1.9,
  },
  {
    id: 2019,
    image: "/products/2019.webp",
    name: "White gold layered chain necklace",
    category: "necklace",
    material: "14k",
    condition: "slightly scratched",
    description:
      "14k white gold layered chain necklace, 38cm + 42cm layers. Minor scratches on the tag and clasp area; overall looks sleek.",
    sellerId: 719,
    askingPrice: 840,
    currentBid: 910,
    currency: "USD",
    highestBidderId: "user_09",
    listedAt: "2025-09-05",
    dueDate: "2026-03-08",
    isForSale: true,
    offerCount: 3,
    weight: 6.2,
  },
  {
    id: 2020,
    image: "/products/2020.webp",
    name: "Gemstone cluster earrings",
    category: "earrings",
    material: "gemstone",
    condition: "good",
    description:
      "Gemstone cluster earrings in yellow gold tone. Cluster size approx. 8mm. Light wear on backs; stones intact and bright.",
    sellerId: 720,
    askingPrice: 330,
    currentBid: 470,
    currency: "USD",
    highestBidderId: "user_66",
    listedAt: "2025-10-07",
    dueDate: "2026-02-24",
    isForSale: true,
    offerCount: 11,
    weight: 2.8,
  },

  {
    id: 3001,
    image: "/products/3001.webp",
    name: "Yellow gold vintage signet ring",
    category: "ring",
    material: "18k",
    condition: "very good",
    description:
      "Solid 18k yellow gold vintage signet ring. Ring size US 8. Smooth polished face with light wear on the band consistent with age.",
    sellerId: 801,
    askingPrice: 5200,
    currentBid: 6800,
    currency: "USD",
    highestBidderId: "user_112",
    listedAt: "2026-03-18",
    dueDate: "2026-05-20",
    isForSale: true,
    offerCount: 22,
    weight: 9.6,
  },
];

const tempPurchasedItems = [
  {
    id: 3002,
    image: "/products/3002.webp",
    name: "White gold diamond eternity ring",
    category: "ring",
    material: "18k",
    condition: "good",
    description:
      "18k white gold eternity ring set with small round diamonds around the band. Ring size US 6. Minor wear on the underside; stones intact.",
    sellerId: 802,
    askingPrice: 9200,
    currentBid: 11850,
    currency: "USD",
    highestBidderId: "user_204",
    listedAt: "2026-04-02",
    dueDate: "2026-07-01",
    isForSale: true,
    offerCount: 31,
    weight: 6.3,
  },
  {
    id: 3003,
    image: "/products/3003.webp",
    name: "Yellow gold chain bracelet",
    category: "bracelet",
    material: "14k",
    condition: "very good",
    description:
      "Heavy 14k yellow gold chain bracelet, 19cm length. Well balanced weight, secure clasp, minimal signs of wear.",
    sellerId: 803,
    askingPrice: 6800,
    currentBid: 7350,
    currency: "USD",
    highestBidderId: "user_089",
    listedAt: "2026-05-11",
    dueDate: "2026-07-25",
    isForSale: true,
    offerCount: 18,
    weight: 24.5,
  },
];

// const initialListNumber = 24;

const initialState = {
  sort: "active",
};

function reducer(state, action) {
  switch (action.type) {
    case "changeSort":
      return { ...state, sort: action.payload };
  }
}

function MyBids() {
  // const [listNumber, setListNumber] = useState(initialListNumber);
  // const [isLoad, setIsLoad] = useState(false);
  // const [isSpin, setIsSpin] = useState(false);
  // const initialItems = fullItems.slice(0, listNumber);

  const navigate = useNavigate();

  const { finishLoading } = useOutletContext();
  const [{ sort }, dispatch] = useReducer(reducer, initialState);
  const listItems =
    sort === "active"
      ? tempBidItems
      : sort === "complete"
      ? tempCompletedAuction
      : tempPurchasedItems;

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
          Active Bids: {tempBidItems.length}
        </button>

        <button
          className={styles.sortButton}
          onClick={() => handleSort("complete")}
        >
          Completed Auctions: {tempCompletedAuction.length}
        </button>

        <button
          className={styles.sortButton}
          onClick={() => handleSort("purchased")}
        >
          Purchased Items: {tempPurchasedItems.length}
        </button>
      </div>

      <div className={styles.listContainer}>
        {listItems.map((item) => (
          <div
            className={`${styles.listItem} ${
              sort === "complete" ? styles.completed : ""
            }`}
            key={item.id}
            onClick={() => handleMovePage(item.id)}
          >
            <div className={styles.imgContainer}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <div className={styles.offerCount}>
                <p>{item.offerCount}</p>
              </div>
            </div>
            <div className={styles.infoContainer}>
              <h3 className={styles.title}>{item.name}</h3>
              <dl className={styles.itemInfo}>
                <dt>Starting Price</dt>
                <dd>{`$${item.askingPrice}`}</dd>

                {sort === "complete" ? (
                  <>
                    <dt>Winning Bid</dt>
                    <dd className={styles.bid}>{`$${
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

                {sort === "complete" ? (
                  <></>
                ) : (
                  <>
                    <dt>Your Bid</dt>
                    <dd className={styles.yourBid}>{`$${item.currentBid}`}</dd>
                  </>
                )}

                {sort === "purchased" ? (
                  <>
                    <dt>Payment Date</dt>
                    <dd>{item.dueDate}</dd>
                  </>
                ) : (
                  <>
                    <dt>Due Date</dt>
                    <dd>{item.dueDate}</dd>
                  </>
                )}
              </dl>
            </div>
          </div>
        ))}
      </div>

      {/* <div className={styles.roadContainer}>
        {!isLoad && fullItems.length > listNumber && (
          <button
            className={styles.roadButton}
            onClick={() => handleLoadList()}
          >
            LOAD MORE
          </button>
        )}
        {isSpin && <Spinner />}
      </div> */}
    </section>
  );
}

export default MyBids;
