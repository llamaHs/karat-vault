import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function About() {
  const { finishLoading } = useOutletContext();

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  return <div></div>;
}

export default About;
