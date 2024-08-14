import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Pricing from "../components/Pricing";

const Landing = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Pricing />
      </div>
    </>
  );
};

export default Landing;
