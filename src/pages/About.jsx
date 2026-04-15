import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./About.module.css";
import PageTitle from "../components/PageTitle";
import Testimonial from "../components/Testimonial";
import OurMission from "../components/OurMission";
import Gallery from "../components/Gallery";
import OurSystem from "../components/OurSystem";

function About() {
  const { finishLoading } = useOutletContext();

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return (
    <div className={styles.container}>
      <PageTitle
        img="/backgrounds/background-title-4.webp"
        heading="About Us"
        subHeading="Discover the story behind Karat Vault."
        alt="gold gemstone jewelry"
      />
      <OurMission />
      <Gallery />
      <OurSystem />
      <Testimonial />
    </div>
  );
}

export default About;
