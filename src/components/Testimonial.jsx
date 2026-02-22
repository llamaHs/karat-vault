import { useState } from "react";
import styles from "./Testimonial.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Daniel Robinson",
    date: "2 days ago",
    image: "./profiles/daniel.jpg",
    review:
      "“I liked that pricing was clearly tied to the market. I placed an offer, adjusted it once, and the process was straightforward. Everything felt transparent from start to finish.”",
  },
  {
    id: 2,
    name: "Minji Park",
    date: "1 week ago",
    image: "./profiles/minji.jpg",
    review:
      "“Selling felt more structured than other platforms I’ve tried. The pricing guidance helped a lot, and I appreciated knowing exactly how fees were calculated before listing.”",
  },
  {
    id: 3,
    name: "Amber Davis",
    date: "2 months ago",
    image: "./profiles/amber.jpg",
    review:
      "“I was hesitant at first, but the process was smooth. The item arrived exactly as described, and payment was handled cleanly without any back-and-forth.”",
  },
  {
    id: 4,
    name: "Micheal Adams",
    date: "3 weeks ago",
    image: "./profiles/michael.jpg",
    review:
      "“Karat Vault felt more organized than typical resale platforms. Knowing the item was handled and stored properly made me comfortable listing a higher-value piece.”",
  },
  {
    id: 5,
    name: "Sophie Brown",
    date: "9 month ago",
    image: "./profiles/sophie.jpg",
    review:
      "“The interface made it easy to compare offers and update mine before the deadline. It didn’t feel rushed or confusing, which I appreciated.”",
  },
  {
    id: 6,
    name: "Thomas Lawrence",
    date: "5 days ago",
    image: "./profiles/thomas.jpg",
    review:
      "“I liked that I could set my expected price during listing and not worry about changes later. Once it was listed, everything moved on its own.”",
  },
  {
    id: 7,
    name: "Emily Chen",
    date: "1 year ago",
    image: "./profiles/emily.jpg",
    review:
      "“I liked being able to see realistic pricing before placing a bid. The process felt secure, and communication was clear throughout. It made buying high-value jewelry feel much less stressful.”",
  },
];

function Testimonial() {
  const [index, setIndex] = useState(0);

  const VISIBLE = 3;
  const STEP = 2;
  const maxIndex = testimonials.length - VISIBLE;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Trusted by Our Customers</h2>
          <p>
            Real experiences from buyers and sellers using Karat Vault for gold
            jewelry trading.
          </p>
        </div>

        <div className={styles.reviewContainer}>
          <button
            className={styles.btnLeft}
            onClick={() =>
              setIndex((i) => (i - STEP < 0 ? maxIndex : i - STEP))
            }
          >
            <FaChevronLeft className={styles.btnIcon} />
          </button>
          <button
            className={styles.btnRight}
            onClick={() =>
              setIndex((i) => (i + STEP > maxIndex ? 0 : i + STEP))
            }
          >
            <FaChevronRight className={styles.btnIcon} />
          </button>

          <div
            className={styles.reviewTrack}
            style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
          >
            {testimonials.map((t) => (
              <div className={styles.review} key={t.id}>
                <p className={styles.reviewContent}>{t.review}</p>
                <div className={styles.profile}>
                  <div className={styles.profileImg}>
                    <img src={`${t.image}`} alt={`${t.name} profile`} />
                  </div>
                  <div className={styles.profileText}>
                    <p className={styles.profileName}>{t.name}</p>
                    <p className={styles.date}>{t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
