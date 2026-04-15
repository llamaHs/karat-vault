import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from "./Wishlist.module.css";

const tempWishLists = [
  {
    id: 3009,
    image: "/products/3009.webp",
    name: "Pink gold solitaire ring",
    category: "ring",
    material: "18k",
    condition: "very good",
    description:
      "18k pink gold solitaire-style ring with center stone approx. 7mm. Ring size US 6.75. Excellent condition with minimal wear.",
    sellerId: 809,
    askingPrice: 7600,
    currentBid: 9200,
    currency: "USD",
    highestBidderId: "user_095",
    listedAt: "2026-03-30",
    dueDate: "2026-07-12",
    isForSale: true,
    offerCount: 21,
    weight: 5.8,
  },
  {
    id: 3010,
    image: "/products/3010.webp",
    name: "Yellow gold statement necklace",
    category: "necklace",
    material: "18k",
    condition: "good",
    description:
      "Bold 18k yellow gold statement necklace, length 42cm. Substantial weight with visible wear consistent with age.",
    sellerId: 810,
    askingPrice: 18200,
    currentBid: 20100,
    currency: "USD",
    highestBidderId: "user_402",
    listedAt: "2026-07-04",
    dueDate: "2026-10-25",
    isForSale: true,
    offerCount: 39,
    weight: 32.5,
  },
];

function Wishlist() {
  const navigate = useNavigate();
  const { finishLoading } = useOutletContext();

  function handleMovePage(id) {
    navigate(`/item/${id}`);
  }

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return (
    <section className={styles.section}>
      <div className={styles.listContainer}>
        {tempWishLists.map((item) => (
          <div
            className={styles.listItem}
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
                <dt>Current Bid</dt>
                <dd className={styles.bid}>{`$${item.currentBid}`}</dd>
                <dt>Due Date</dt>
                <dd>{item.dueDate}</dd>

                {/* {sort === "complete" ? (
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
                )} */}
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

export default Wishlist;
