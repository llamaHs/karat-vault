import styles from "./FAQ.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const faqList = [
  {
    id: 1,
    question: "How is the condition of each piece evaluated?",
    answer:
      "At Karat Vault, every listing includes a clearly stated condition level to help you shop with confidence. We use a five-tier system: New, Very Good, Good, Slightly Scratched, and Scratched. Sellers are required to describe any visible flaws in detail, and clear product photos are provided so you can review the piece carefully before placing a bid.",
  },
  {
    id: 2,
    question: "When is the gold price applied to my listing?",
    answer:
      "The gold market price is applied at the time you submit the selling form, before shipping your item to Karat Vault. This price is used to calculate the minimum starting price. Once your listing is submitted and approved, the price is fixed and does not change, even if the market price moves later.",
  },
  {
    id: 3,
    question: "Can I change my price after my item is listed?",
    answer:
      "No. Sellers can adjust their desired price only during the listing process. After the item is verified and goes live, the price cannot be changed. This ensures fairness and consistency for all buyers participating in the auction.",
  },
  {
    id: 4,
    question: "What happens if my item doesn’t receive any offers?",
    answer:
      "If no offers are placed by the bidding deadline, the item will not be sold. Karat Vault will contact you to discuss next steps, including relisting options or returning the item.",
  },
  {
    id: 5,
    question: "How is the final buyer selected and charged?",
    answer:
      "At the bidding deadline, the system automatically confirms the highest valid offer. The winning buyer is charged immediately, and all other offers are released without charge.",
  },
  {
    id: 6,
    question: "What happens after my item is sold?",
    answer:
      "Once the item is sold, Karat Vault handles packing and shipping to the buyer. Sellers receive payment after the transaction is completed, according to the platform’s settlement schedule.",
  },
  {
    id: 7,
    question: "Who pays for shipping, taxes, and duties?",
    answer:
      "Shipping fees, taxes, and duties are paid by the buyer. These costs vary depending on the destination country and are calculated during checkout.",
  },
  {
    id: 8,
    question: "Can I sell items that are not pure gold?",
    answer:
      "Yes. We accepts gold jewelry of different karats, as well as gemstone pieces. Each item is reviewed during the listing process to ensure it meets platform standards.",
  },
  {
    id: 9,
    question: "What happens if there is a dispute after delivery?",
    answer:
      "If a buyer reports an issue after delivery, Karat Vault reviews the case based on item condition records and transaction history. Disputes are handled according to platform policies to protect both buyers and sellers.",
  },
];

function FAQ() {
  const [openId, setOpenId] = useState(null);

  function toggleFaq(id) {
    setOpenId((currentId) => (currentId === id ? null : id));
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>FAQ</h2>
          <p>
            Everything you need to know about buying and selling on Karat Vault.
          </p>
        </div>
        <div className={styles.faqContainer}>
          {faqList.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div className={styles.faq} key={faq.id}>
                <div
                  className={styles.boxQuestion}
                  onClick={() => toggleFaq(faq.id)}
                >
                  {isOpen ? (
                    <AiOutlineMinus className={styles.icon} />
                  ) : (
                    <AiOutlinePlus className={styles.icon} />
                  )}
                  <p className={styles.question}>{faq.question}</p>
                </div>
                <div
                  className={`${styles.boxAnswer} ${
                    isOpen ? "" : styles.hidden
                  }`}
                >
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
