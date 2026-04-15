import CareerBenefit from "../components/CareerBenefit";
import CareerFeature from "../components/CareerFeature";
import CareerList from "../components/CareerList";
import PageTitle from "../components/PageTitle";
import styles from "./Careers.module.css";

function Careers() {
  return (
    <div className={styles.container}>
      <PageTitle
        img="./backgrounds/background-title-9.webp"
        heading="Careers at Karat Vault"
        subHeading="Work with us to create a smarter and more transparent jewelry marketplace."
        alt="a man looking at a diamond"
      />
      <CareerFeature />
      <CareerList />
      <CareerBenefit />
    </div>
  );
}

export default Careers;
