import React from "react";
import AboutUs from "../components/HomepageComponents/AboutUs";
import Faq from "../components/HomepageComponents/Faq";
import Home from "../components/HomepageComponents/Home";
import Gallary from "../components/HomepageComponents/Gallary";
// import Background2 from "../components/Background/Background2";
import Background from "../components/Background/Background";

const HomePage = () => {
  return (
    <>
      {/* <Background2 /> */}
      <Background />
      <Home />
      <AboutUs />
      <Gallary />
      <Faq />
    </>
  );
};

export default HomePage;
