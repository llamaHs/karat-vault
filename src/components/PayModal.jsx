import styles from "./PayModal.module.css";
import { MdOutlineCancel } from "react-icons/md";

function PayModal({ modal, onCloseModal }) {
  const payMethod =
    modal === "paypal"
      ? "PayPal"
      : modal === "apple"
      ? "Apple Pay"
      : "Google Pay";

  return (
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <MdOutlineCancel className={styles.cancelIcon} onClick={onCloseModal} />
      <h2 className={styles.title}>Connect {payMethod}</h2>

      <div className={styles.explainContainer}>
        <p className={styles.explain}>
          You'll be redirected to {payMethod} to securely connect your
          account...
        </p>
        <p className={styles.subExplain}>
          * Karat Vault does not store your {payMethod} login information.
        </p>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.cancelButton} onClick={onCloseModal}>
          Cancel
        </button>
        <button className={styles.continueButton}>
          Continue to {payMethod}
        </button>
      </div>
    </div>
  );
}

export default PayModal;
