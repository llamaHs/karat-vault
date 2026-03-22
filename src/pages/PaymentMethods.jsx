import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./PaymentMethods.module.css";
import {
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
  FaCreditCard,
  FaPaypal,
  FaCcApplePay,
  FaGooglePay,
} from "react-icons/fa";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import AddCardModal from "../components/AddCardModal";
import PayModal from "../components/PayModal";

const tempUserCard = [
  {
    id: "visa4812",
    type: "visa",
    name: "Visa",
    number: ["4123", "9876", "5432", "4812"],
  },
  {
    id: "master9012",
    type: "master",
    name: "Master",
    number: ["5234", "1234", "5678", "9012"],
  },
  {
    id: "amex0529",
    type: "amex",
    name: "Amex",
    number: ["3728", "9010", "7894", "0529"],
  },
];

function PaymentMethods() {
  const { finishLoading } = useOutletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState("");

  function handleModalClick(type) {
    setModal(type);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setModal("");
  }

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Credit/Debit Card</h2>
        <div className={styles.cardContainer}>
          {tempUserCard.map((card) => (
            <div className={styles.card} key={card.id}>
              <div className={styles.cardType}>
                {card.type === "visa" ? (
                  <FaCcVisa className={`${styles.cardIcon} ${styles.visa}`} />
                ) : card.type === "master" ? (
                  <FaCcMastercard
                    className={`${styles.cardIcon} ${styles.master}`}
                  />
                ) : card.type === "amex" ? (
                  <FaCcAmex className={`${styles.cardIcon} ${styles.amex}`} />
                ) : (
                  <FaCreditCard />
                )}
                <p className={styles.cardName}>{card.name}</p>
                <div className={styles.iconsWrapper}>
                  <MdOutlineEdit className={styles.icon} />
                  <MdDeleteOutline className={styles.icon} />
                </div>
              </div>
              <p className={styles.cardNumber}>{`${
                card.number[0]
              } **** **** ${card.number.slice(-1)}`}</p>
            </div>
          ))}
          <div
            className={styles.addCard}
            onClick={() => handleModalClick("addCard")}
          >
            <IoIosAddCircleOutline className={styles.addCardIcon} />
          </div>
        </div>

        <h2 className={styles.title}>PayPal</h2>
        <div className={styles.paypalContainer}>
          <button
            className={styles.paypalButton}
            onClick={() => handleModalClick("paypal")}
          >
            <FaPaypal className={styles.paypalIcon} /> Connect PayPal
          </button>
          <p className={styles.info}>
            You will be redirected to PayPal to securely connect your account.
          </p>
        </div>

        <h2 className={styles.title}>Apple Pay / Google Pay</h2>
        <div className={styles.paysContainer}>
          <div className={styles.buttonWrapper}>
            <button
              className={styles.applepayButton}
              onClick={() => handleModalClick("apple")}
            >
              <FaCcApplePay className={styles.applepayIcon} /> Connect Apple Pay
            </button>
            <button
              className={styles.googlepayButton}
              onClick={() => handleModalClick("google")}
            >
              <FaGooglePay className={styles.googlepayIcon} /> Connect Google
              Pay
            </button>
          </div>
          <p className={styles.info}>
            You will be redirected to a secure payment window
          </p>
        </div>
      </div>

      <div
        className={`${styles.overlay} ${isModalOpen ? styles.open : ""}`}
        onClick={handleCloseModal}
      >
        {modal === "addCard" && (
          <AddCardModal onCloseModal={handleCloseModal} />
        )}
        {modal !== "addCard" && modal !== "" && (
          <PayModal modal={modal} onCloseModal={handleCloseModal} />
        )}
      </div>
    </section>
  );
}

export default PaymentMethods;
