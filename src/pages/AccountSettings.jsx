import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./AccountSettings.module.css";
import { countryCodes } from "../data/countryCodes";

function AccountSettings() {
  const [active, setActive] = useState("profile");
  const [agreeAll, setAgreeAll] = useState(false);
  const [buyerNotify, setBuyerNotify] = useState(false);
  const [sellerNotify, setSellerNotify] = useState(false);

  const { finishLoading } = useOutletContext();

  function handleAgreeAll() {
    const newValue = !agreeAll; // agreeAll = !agreeAll

    setAgreeAll(newValue);
    setBuyerNotify(newValue);
    setSellerNotify(newValue);
  }

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  useEffect(() => {
    // Bring all sections(DOM) that have id
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // check whether each section comes inside of viewport
            // entry = current state of a section
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        // standard area. null = viewport
        // check inside of the specific root (div) only.
        threshold: 1,
        // 0.3: 30% , 1: 100%
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (buyerNotify && sellerNotify) {
      setAgreeAll(true);
    } else {
      setAgreeAll(false);
    }
  }, [buyerNotify, sellerNotify]);
  // if {} without useEffect can cause infinite loop
  // state change -> inside of event handler or useEffect

  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <ul className={styles.nav}>
          <li className={active === "profile" ? styles.active : ""}>
            <a href="#profile">Profile</a>
          </li>
          <li className={active === "security" ? styles.active : ""}>
            <a href="#security">Security</a>
          </li>
          <li className={active === "shipping" ? styles.active : ""}>
            <a href="#shipping">Shipping Information</a>
          </li>
          <li className={active === "notification" ? styles.active : ""}>
            <a href="#notification">Notifications</a>
          </li>
          <li className={active === "danger" ? styles.active : ""}>
            <a href="#danger">Danger Zone</a>
          </li>
        </ul>
      </nav>

      <div className={styles.mainContainer}>
        <section id="profile" className={styles.profileSection}>
          <h2 className={styles.title}>Profile</h2>

          <div className={styles.nameContainer}>
            <div className={styles.wrapper}>
              <label className={styles.label} htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                className={styles.shortInput}
                type="text"
                readOnly
                value={"Test Name"}
              />
            </div>

            <div className={styles.wrapper}>
              <label className={styles.label} htmlFor="lastName">
                Family Name
              </label>
              <input
                id="lastName"
                className={styles.shortInput}
                type="text"
                readOnly
                value={"Test FamilyName"}
              />
            </div>
          </div>
          <div className={styles.accountContainer}>
            <div className={styles.wrapper}>
              <label className={styles.label} htmlFor="id">
                Username
              </label>
              <div className={styles.inputRow}>
                <input
                  id="id"
                  className={styles.shortInput}
                  type="text"
                  readOnly
                  value={"testuserid"}
                />
                <button className={styles.editButton}>Edit</button>
              </div>
            </div>

            <div className={styles.wrapper}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <div className={styles.inputRow}>
                <input
                  id="email"
                  className={styles.longInput}
                  type="text"
                  readOnly
                  value={"useremailid@mockmail.com"}
                />
                <button className={styles.editButton}>Edit</button>
              </div>
            </div>
          </div>
        </section>

        <section id="security" className={styles.securitySection}>
          <h2 className={styles.title}>Security</h2>

          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <div className={styles.inputRow}>
              <input
                id="password"
                className={styles.shortInput}
                type="password"
                readOnly
                value={"*******"}
              />
              <button className={styles.editButton}>Change Password</button>
            </div>
          </div>
        </section>

        <section id="shipping" className={styles.shippingInfoSection}>
          <h2 className={styles.title}>Shipping Information</h2>

          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="address">
              Address
            </label>
            <div className={styles.inputRow}>
              <textarea
                id="address"
                className={styles.textarea}
                rows={4}
                readOnly
                value={
                  "19 Harbourview Drive, Apt 7B, Sydney, NSW 2000, Australias"
                }
              />
              <button className={styles.editButton}>Edit</button>
            </div>
          </div>

          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="phone">
              Phone
            </label>
            <div className={styles.inputRow}>
              <select className={styles.countryCode}>
                {countryCodes.map((country) => (
                  <option key={country.name} value={country.code}>
                    {country.code} ({country.name})
                  </option>
                ))}
              </select>
              <input
                id="phone"
                className={styles.shortInput}
                readOnly
                value={"1012345678"}
              />
              <button className={styles.editButton}>Edit</button>
            </div>
          </div>
        </section>

        <section id="notification" className={styles.notificationSection}>
          <h2 className={styles.title}>Notifications</h2>

          <div className={styles.toggleWrapper}>
            <label className={styles.toggleLabel} htmlFor="agreeAll">
              Agree to all notifications
            </label>
            <div className={styles.inputRow}>
              <input
                type="checkbox"
                id="agreeAll"
                checked={agreeAll}
                onChange={handleAgreeAll}
                className={styles.toggle}
              />
            </div>
          </div>

          <div className={styles.toggleWrapper}>
            <label className={styles.toggleLabel} htmlFor="buyerNotify">
              (Buyer) Get notified by email when the bid price changes after
              placing a bid.
            </label>
            <div className={styles.inputRow}>
              <input
                type="checkbox"
                id="buyerNotify"
                checked={buyerNotify}
                className={styles.toggle}
                onChange={() => setBuyerNotify((prev) => !prev)}
              />
            </div>
          </div>

          <div className={styles.toggleWrapper}>
            <label className={styles.toggleLabel} htmlFor="sellerNotify">
              (Seller) Get notified by email when a new bid is placed.
            </label>
            <div className={styles.inputRow}>
              <input
                type="checkbox"
                id="sellerNotify"
                checked={sellerNotify}
                className={styles.toggle}
                onChange={() => setSellerNotify((prev) => !prev)}
              />
            </div>
          </div>

          <p className={styles.toggleNotice}>
            * Auction completion emails are sent to both buyers and sellers
            regardless of notification preferences.
          </p>
        </section>

        <section id="danger" className={styles.deleteAccountSection}>
          <h2 className={styles.dangerTitle}>Danger Zone</h2>

          <div className={styles.warningWrapper}>
            <p className={styles.warning}>
              <span>Delete</span> your account and{" "}
              <span>permanently remove</span> all your data, including listings
              and bids.
            </p>
            <p className={styles.warning}>
              <span>This action cannot be undone.</span>
            </p>
            <button
              className={styles.deleteAccountButton}
              onClick={() => {
                const confirmed = confirm(
                  "Are you sure you want to delete your account? This action cannot be undone."
                );

                if (!confirmed) return;
              }}
            >
              Delete Account
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AccountSettings;
