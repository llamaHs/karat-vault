import styles from "./CareerFeature.module.css";
import {
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
} from "react-icons/hi";

function CareerFeature() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Our Approach to Building a Strong Team</h2>
        </div>

        <div className={styles.textContainer}>
          <p className={styles.text}>
            A reliable platform is built by people who value consistency,
            responsibility, and attention to detail.
          </p>
          <p className={styles.text}>
            At Karat Vault, we aim to create a working environment where each
            team member understands their role and contributes with clarity and
            purpose.
          </p>
          <p className={styles.text}>
            From how we collaborate across teams to how decisions are made and
            executed, we focus on maintaining a culture that supports steady
            growth, clear communication, and long-term trust within the
            organization.
          </p>
        </div>

        <div className={styles.featureContainer}>
          <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper}>
              <HiOutlineUser className={styles.careerIcon} />
            </div>
            <div className={styles.featureTextWrapper}>
              <p className={styles.featureTitle}>Ownership</p>
              <p className={styles.featureText}>
                We encourage each team member to take responsibility for their
                work. Clear ownership helps maintain consistency while allowing
                individuals to contribute with confidence.
              </p>
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper}>
              <HiOutlineUserGroup className={styles.careerIcon} />
            </div>
            <div className={styles.featureTextWrapper}>
              <p className={styles.featureTitle}>Collaboration</p>
              <p className={styles.featureText}>
                Work is shared across teams with open communication and mutual
                respect. We aim to create an environment where ideas can be
                discussed and improved together.
              </p>
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper}>
              <HiOutlineTrendingUp className={styles.careerIcon} />
            </div>
            <div className={styles.featureTextWrapper}>
              <p className={styles.featureTitle}>Growth</p>
              <p className={styles.featureText}>
                We support steady development through real tasks and practical
                experience. Team members are given opportunities to build skills
                over time.
              </p>
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper}>
              <HiOutlineShieldCheck className={styles.careerIcon} />
            </div>
            <div className={styles.featureTextWrapper}>
              <p className={styles.featureTitle}>Stability</p>
              <p className={styles.featureText}>
                We value consistency in both process and decision-making. A
                stable environment allows the team to focus on meaningful work
                without unnecessary uncertainty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerFeature;
