import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./About.module.css";
import PageTitle from "../components/PageTitle";
import Testimonial from "../components/Testimonial";
import OurMission from "../components/OurMission";
import Gallery from "../components/Gallery";

function About() {
  const { finishLoading } = useOutletContext();

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return (
    <div className={styles.container}>
      <PageTitle
        img="/backgrounds/background-title-4.png"
        heading="About Us"
        subHeading="Discover the story behind Karat Vault."
      />
      <OurMission />
      <Gallery />
      <Testimonial />
    </div>
  );
}

export default About;
