import ByMaterial from "../components/ByMaterial";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import HotItemsNow from "../components/HotItemsNow";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Hero />
      <HotItemsNow />
      <Feature />
      <ByMaterial />
    </>
  );
}

export default Home;
