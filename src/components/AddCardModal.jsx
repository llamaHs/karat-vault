import { useRef, useState } from "react";
import styles from "./AddCardModal.module.css";
import {
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
  FaCreditCard,
  FaRegCreditCard,
} from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

function AddCardModal({ onCloseModal }) {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  function handleCardNumberChange(e, index) {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);

    const newCardNumber = [...cardNumber];
    newCardNumber[index] = value;
    setCardNumber(newCardNumber);

    if (value.length === 4 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  }

  function handleCardNumberKeyDown(e, index) {
    if (e.key === "Backspace" && !cardNumber[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }

  function handleExpiryChange(e) {
    let value = e.target.value.replace(/\D/g, "").slice(0, 4);

    if (value.length >= 1) {
      if (value[0] > "1") value = "0" + value;
    }

    if (value.length >= 2) {
      const month = Number(value.slice(0, 2));
      if (month > 12) value = "12" + value.slice(2);
    }

    if (value.length >= 3) {
      value = `${value.slice(0, 2)} / ${value.slice(2)}`;
    }

    setExpiry(value);
  }

  function handleCvvChange(e) {
    let value = e.target.value.replace(/\D/g, "").slice(0, 3);

    setCvv(value);
  }

  const fullCardNumber = cardNumber.join("");

  return (
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <MdOutlineCancel className={styles.cancelIcon} onClick={onCloseModal} />
      <h2 className={styles.title}>Add Card</h2>
      <form className={styles.form}>
        <div className={styles.cardNumber}>
          <label className={styles.label}>Card Number</label>
          <div className={styles.cardNumberInputs}>
            {cardNumber.map((num, index) => (
              <input
                className={styles.cardNumberInput}
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={4}
                value={num}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleCardNumberChange(e, index)}
                onKeyDown={(e) => handleCardNumberKeyDown(e, index)}
              />
            ))}
          </div>

          {fullCardNumber.startsWith("4") ? (
            <FaCcVisa className={`${styles.cardIcon} ${styles.visa}`} />
          ) : ["51", "52", "53", "54", "55"].some((num) =>
              fullCardNumber.startsWith(num)
            ) ? (
            <FaCcMastercard className={`${styles.cardIcon} ${styles.master}`} />
          ) : ["34", "37"].some((num) => fullCardNumber.startsWith(num)) ? (
            <FaCcAmex className={`${styles.cardIcon} ${styles.amex}`} />
          ) : (
            <FaRegCreditCard
              className={`${styles.cardIcon} ${styles.others}`}
            />
          )}
        </div>

        <div className={styles.cardInfoContainer}>
          <div className={styles.cardDate}>
            <label className={styles.label}>MM / YY</label>
            <input
              className={styles.expiryInput}
              type="text"
              inputMode="numeric"
              placeholder="MM / YY"
              maxLength={7}
              value={expiry}
              onChange={handleExpiryChange}
            />
          </div>

          <div className={styles.cardCVV}>
            <label className={styles.label}>CVV</label>
            <input
              className={styles.cvvInput}
              type="password"
              inputMode="numeric"
              maxLength={3}
              value={cvv}
              onChange={handleCvvChange}
            />
          </div>
        </div>

        <div className={styles.explainContainer}>
          <p className={styles.explain}>
            * Your card information is securely stored.
          </p>
          <p className={styles.explain}>
            * You can remove this card at any tume from Payment Methods.
          </p>
        </div>

        <div className={styles.formButtonContainer}>
          <button type="button" className={styles.cancelButton}>
            Cancel
          </button>
          <button type="button" className={styles.addButton}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCardModal;
