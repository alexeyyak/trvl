import React from "react";

import "../../App.css";

import HeroSection from "../../components/HeroSection/HeroSection";
import Cards from "../../components/Cards/Cards";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
