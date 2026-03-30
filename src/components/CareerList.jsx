import styles from "./CareerList.module.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    title: "Product Designer (UI/UX)",
    department: "Product",
    location: "San Francisco, CA",
  },
  {
    id: 4,
    title: "Auction Operations Specialist",
    department: "Operations",
    location: "San Francisco, CA",
  },
  {
    id: 5,
    title: "Jewelry Authentication Specialist",
    department: "Product Authentication",
    location: "San Francisco, CA",
  },
  {
    id: 6,
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "San Francisco, CA",
  },
  {
    id: 7,
    title: "Global Partnerships Manager",
    department: "Business Development",
    location: "San Francisco, CA / Remote",
  },
];

function CareerList() {
  const [index, setIndex] = useState(0);

  const VISIBLE = 4;
  const STEP = 1;
  const maxIndex = jobs.length - VISIBLE;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Open Positions</h2>
          <p>
            Explore opportunities to grow with Karat Vault and shape the future
            of modern jewelry auctions.
          </p>
        </div>

        <div className={styles.jobContainer}>
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
            className={styles.jobTrack}
            style={{ transform: `translateX(-${index * (100 / 4)}%)` }}
          >
            {jobs.map((job) => (
              <div className={styles.job} key={job.id}>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>{job.title}</h3>
                  <p className={styles.department}>{job.department}</p>
                </div>
                <p className={styles.location}>{job.location}</p>
                <button className={styles.jobButton}>Apply</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerList;
