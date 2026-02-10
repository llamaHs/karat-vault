import ByMaterial from "../components/ByMaterial";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import HotItemsNow from "../components/HotItemsNow";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <>
      <Hero />
      <HotItemsNow />
      <Feature />
      <ByMaterial />
      <Testimonial />
    </>
  );
}

export default Home;
