import React from "react";
import AboutUs from "../components/HomepageComponents/AboutUs";
import Faq from "../components/HomepageComponents/Faq";
import Home from "../components/HomepageComponents/Home";
import Gallary from "../components/HomepageComponents/Gallary";
import Background from "../components/Background/Background";

const HomePage = () => {
  return (
    <>
      <Background />
      <Home />
      <AboutUs />
      <Gallary />
      <Faq />
    </>
  );
};

export default HomePage;
