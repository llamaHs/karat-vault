import { useState } from "react";
import styles from "./BidForm.module.css";
import { IoLogoPaypal, IoCardSharp } from "react-icons/io5";
import { MdAddCard } from "react-icons/md";
import { usePlaceBid } from "../hooks/usePlaceBid";

function BidForm({ productId, currentBid, onCloseBid }) {
  const [amount, setAmount] = useState("");
  const [bidError, setBidError] = useState("");
  const [agreeError, setAgreeError] = useState("");
  const [method, setMethod] = useState("");
  const [agreed, setAgreed] = useState({
    1: false,
    2: false,
    3: false,
  });

  const agreement = [
    {
      id: 1,
      agreement: "I agree to automatic payment if I win the auction.",
    },
    {
      id: 2,
      agreement:
        "I authorize Karat Vault to charge my selected payment method for this transaction.",
    },
    {
      id: 3,
      agreement:
        "I understand and agree that the final amount charged may exceed my winning bid due to additional costs such as shipping fees, taxes, and customs duties.",
    },
  ];

  const { mutateAsync: placeBid, isPending } = usePlaceBid();

  async function handleSubmit(e) {
    e.preventDefault();

    const bid = Number(amount);
    const allAgreed = Object.values(agreed).every(Boolean);

    if (!amount) {
      setBidError("Please enter your bid.");
      return;
    }

    if (Number.isNaN(bid)) {
      setBidError("Please enter a valid number.");
      return;
    }

    if (bid <= currentBid) {
      setBidError("Your bid must be higher than the current bid.");
      return;
    }

    if (!allAgreed) {
      setAgreeError("You must agree before placing a bid.");
      return;
    }

    setBidError("");
    setAgreeError("");

    try {
      await placeBid({
        productId,
        bidAmount: bid,
      });

      onCloseBid();
    } catch (error) {
      setBidError(error.message);
    }
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
                Visa 4123 **** **** 4812
              </label>
            </div>

            <div className={styles.savedCardOption}>
              <input id="master9012" type="radio" name="savedCard" />
              <label htmlFor="master9012" className={styles.savedCardOption}>
                Master 5234 **** **** 9012
              </label>
            </div>

            <div className={styles.savedCardOption}>
              <input id="amex0529" type="radio" name="savedCard" />
              <label htmlFor="amex0529" className={styles.savedCardOption}>
                Amex 3728 **** **** 0529
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
              <button type="button" className={styles.paypalButton}>
                Pay with PayPal
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
        {agreement.map((a) => (
          <div className={styles.agreementWrapper} key={a.id}>
            <input
              id={`agreement-${a.id}`}
              type="checkbox"
              checked={agreed[a.id]}
              onChange={(e) =>
                setAgreed((prev) => ({
                  ...prev,
                  [a.id]: e.target.checked,
                }))
              }
            />
            <label htmlFor={`agreement-${a.id}`}>{a.agreement}</label>
          </div>
        ))}

        {agreeError && (
          <p className={`${styles.error} ${styles.agreeError}`}>{agreeError}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className={styles.submitButton}
      >
        {isPending ? "PLACING BID..." : "PLACE BID"}
      </button>
    </form>
  );
}

export default BidForm;
