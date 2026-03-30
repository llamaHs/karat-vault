import styles from "./CareerBenefit.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { use, useState } from "react";

const benefits = [
  {
    id: 1,
    title: "Professional Development",
    content:
      "We support continuous learning through practical experience and industry-related education. This includes financial support for certifications, seminars, and training programs related to auctions, valuation, and jewelry expertise.",
  },
  {
    id: 2,
    title: "Flexible Work Structure",
    content:
      "Our work structure is designed to allow flexibility where possible. This includes adjustable working hours, remote work options for certain roles, and a focus on outcomes rather than fixed schedules.",
  },
  {
    id: 3,
    title: "Employee Auction Credits",
    content:
      "To encourage engagement with the platform, employees are provided with credits that can be used when participating in auctions. This approach ensures fair participation while maintaining transparency in the bidding process.",
  },
  {
    id: 4,
    title: "Extended Leave Benefits",
    content:
      "In addition to standard paid leave, we offer extended time off during major holidays and provide additional leave options to support rest, travel, or personal commitments throughout the year.",
  },
  {
    id: 5,
    title: "Family and Well-being Support",
    content:
      "We provide support for employees and their families through parenting assistance, access to counseling services, and confidential programs designed to help manage personal and professional challenges.",
  },
];

function CareerBenefit() {
  const [openId, setOpenId] = useState([]);

  function toggleBenefit(id) {
    const currentOpenId = openId.includes(id)
      ? openId.filter((openId) => openId !== id)
      : [...openId, id];

    setOpenId(currentOpenId);
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Employee Benefits</h2>
        </div>
        <div className={styles.benefitContainer}>
          {benefits.map((benefit) => {
            const isOpen = openId.includes(benefit.id);

            return (
              <div className={styles.benefit} key={benefit.id}>
                <div
                  className={styles.boxTitle}
                  onClick={() => toggleBenefit(benefit.id)}
                >
                  {isOpen ? (
                    <AiOutlineMinus className={styles.icon} />
                  ) : (
                    <AiOutlinePlus className={styles.icon} />
                  )}
                  <h3 className={styles.title}>{benefit.title}</h3>
                </div>
                <div
                  className={`${styles.boxContent} ${
                    isOpen ? styles.open : ""
                  }`}
                >
                  <p className={styles.content}>{benefit.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CareerBenefit;
