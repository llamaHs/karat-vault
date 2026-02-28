import { useState } from "react";
import styles from "./BidForm.module.css";
import { IoLogoPaypal, IoCardSharp } from "react-icons/io5";
import { MdAddCard } from "react-icons/md";

function BidForm({ currentBid, onCloseBid }) {
  const [amount, setAmount] = useState("");
  const [bidError, setBidError] = useState("");
  const [agreeError, setAgreeError] = useState("");
  const [method, setMethod] = useState("");
  const [agreed1, setAgreed1] = useState(false);
  const [agreed2, setAgreed2] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const bid = Number(amount);

    if (!amount) {
      setBidError("Please enter your bid.");
      return;
    }

    if (bid <= currentBid) {
      setBidError("Your bid must be higher than the current bid.");
      return;
    }

    if (Number.isNaN(bid)) {
      setBidError("Please enter a valid number.");
      return;
    }

    if (!agreed1 || !agreed2) {
      setAgreeError("You must agree before placing a bid.");
      return;
    }

    setBidError("");
    setAgreeError("");

    // dispatch here later
    // dispatch ({type: "placeBid" payload: {itemId, bid}})

    onCloseBid?.();
  }

  return (
    <form className={styles.bidForm} onSubmit={handleSubmit}>
      <div className={styles.currentBidContainer}>
        <p className={styles.currentBid}>CURRENT BID</p>
        <span className={styles.currentBidValue}>${currentBid}</span>
      </div>

      <div className={styles.userBidContainer}>
        <div className={styles.bidField}>
          <label htmlFor="bidAmount" className={styles.bidLabel}>
            YOUR BID
          </label>
          <div className={styles.inputWrapper}>
            <span className={styles.currency}>$</span>
            <input
              id="bidAmount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              step="1"
              className={styles.bidInput}
            />
          </div>
        </div>
        {bidError && (
          <p className={`${styles.error} ${styles.bidError}`}>{bidError}</p>
        )}
      </div>

      <div className={styles.paymentContainer}>
        <p className={styles.payment}>PAYMENT METHOD</p>
        {/* credit card */}
        <div className={styles.paymentOptionContainer}>
          <input
            id="card"
            type="radio"
            name="payment"
            value="card"
            checked={method === "card"}
            onChange={() => setMethod("card")}
          />
          <IoCardSharp className={styles.paymentIcon} />
          <label htmlFor="card" className={styles.paymentLabel}>
            Credit Card
          </label>
        </div>

        {method === "card" && (
          <div className={styles.subContent}>
            <div className={styles.savedCardOption}>
              <input id="visa4821" type="radio" name="savedCard" />
              <label htmlFor="visa4821" className={styles.savedCardOption}>
                Visa **** **** 4821
              </label>
            </div>
            <div className={styles.savedCardOption}>
              <input id="master9012" type="radio" name="savedCard" />
              <label htmlFor="master9012" className={styles.savedCardOption}>
                Master **** **** 9012
              </label>
            </div>
          </div>
        )}

        {/* paypal */}
        <div className={styles.paymentOptionContainer}>
          <input
            id="paypal"
            type="radio"
            name="payment"
            value="paypal"
            checked={method === "paypal"}
            onChange={() => setMethod("paypal")}
          />
          <IoLogoPaypal className={styles.paymentIcon} />
          <label htmlFor="paypal" className={styles.paymentLabel}>
            PayPal
          </label>
        </div>

        {method === "paypal" && (
          <div className={styles.subContent}>
            <div className={styles.paypalButtonWrapper}>
              <button className={styles.paypalButton}>
                Log in with PayPal
              </button>
            </div>
          </div>
        )}

        {/* new card */}
        <div className={styles.paymentOptionContainer}>
          <input
            id="newCard"
            type="radio"
            name="payment"
            value="newCard"
            checked={method === "newCard"}
            onChange={() => setMethod("newCard")}
          />
          <MdAddCard className={styles.paymentIcon} />
          <label htmlFor="newCard" className={styles.paymentLabel}>
            Add New Credit Card
          </label>
        </div>

        {method === "newCard" && (
          <div className={styles.subContent}>
            <div className={styles.newCardInput}>
              <input placeholder="Card Number" />
              <div className={styles.dataCvcWrapper}>
                <input placeholder="MM / YY" />
                <input placeholder="CVC" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.agreementContainer}>
        <div className={styles.agreementWrapper}>
          <input
            id="agreed1"
            type="checkbox"
            checked={agreed1}
            onChange={(e) => setAgreed1(e.target.checked)}
          />
          <label htmlFor="agreed1">
            I agree to automatic payment if I win the auction.
          </label>
        </div>

        <div className={styles.agreementWrapper}>
          <input
            id="agreed2"
            type="checkbox"
            checked={agreed2}
            onChange={(e) => setAgreed2(e.target.checked)}
          />
          <label htmlFor="agreed2">
            I authorize Karat Vault to charge my selected payment method for
            this transaction.
          </label>
        </div>

        {agreeError && (
          <p className={`${styles.error} ${styles.agreeError}`}>{agreeError}</p>
        )}
      </div>

      <button type="submit" className={styles.submitButton}>
        PLACE BID
      </button>
    </form>
  );
}

export default BidForm;
