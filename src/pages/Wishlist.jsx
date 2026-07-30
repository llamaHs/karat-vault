import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from "./Wishlist.module.css";
import { useWishlists } from "../hooks/useWishlists";

function Wishlist() {
  const navigate = useNavigate();
  const { finishLoading } = useOutletContext();

  const { data: wishlists = [], isPending, isError } = useWishlists();

  function handleMovePage(id) {
    navigate(`/item/${id}`);
  }

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return (
    <section className={styles.section}>
      <div className={styles.listContainer}>
        {!isPending && wishlists.length === 0 ? (
          <p className={styles.emptyMessage}>Your wishlist is empty.</p>
        ) : (
          wishlists.map((wishlist) => {
            const item = wishlist.products;

            return (
              <div
                className={styles.listItem}
                key={wishlist.id}
                onClick={() => handleMovePage(item.id)}
              >
                <div className={styles.imgContainer}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.image}
                  />
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
            );
          })
        )}
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
