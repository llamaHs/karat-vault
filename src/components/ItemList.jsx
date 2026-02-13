import styles from "./ItemList.module.css";

const tempItem = [
  {
    id: 2001,
    image: "./products/2001.png",
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
    image: "./products/2002.png",
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
    image: "./products/2003.png",
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
    image: "./products/2004.png",
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
    image: "./products/2005.png",
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
    image: "./products/2006.png",
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
  {
    id: 2007,
    image: "./products/2007.png",
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
    image: "./products/2008.png",
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
    image: "./products/2009.png",
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
    image: "./products/2010.png",
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
];

function ItemList() {
  return (
    <section className={styles.section}>
      <div className={styles.sort}>
        <label htmlFor="sort" className={styles.sortLabel}>
          Sort:
        </label>
        <select id="sort" className={styles.sortOption}>
          <option value="latest">Lastest</option>
          <option value="popular">Popular</option>
          <option value="highestBid">Highest Bid</option>
          <option value="lowestBid">Lowest Bid</option>
        </select>
      </div>

      <div className={styles.listContainer}>
        {tempItem.map((item) => (
          <div className={styles.listItem} key={item.id}>
            <div className={styles.imgContainer}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <div className={styles.offerCount}>
                <p>{item.offerCount}</p>
              </div>
            </div>
            <div className={styles.infoContainer}>
              <h3 className={styles.title}>{item.name}</h3>
              <dl className={styles.itemInfo}>
                <dt>Asking Price</dt>
                <dd>{`$${item.askingPrice}`}</dd>

                <dt>Current Bid</dt>
                <dd className={styles.bid}>{`$${item.currentBid}`}</dd>

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

export default ItemList;
