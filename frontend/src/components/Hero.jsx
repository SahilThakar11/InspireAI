import React, { useRef } from "react";
import FilledButton from "./shared/FilledButton";
import hero from "../assets/hero.jpg";
import { Link } from "react-router-dom";
import FakePrompt from "./design/FakePrompt";
import InspireAIText from "../assets/svg/InspireAI.svg";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <div className="pt-[8rem] -mt-[5rem]" id="hero">
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[64rem] mx-auto text-center mb-[2rem] md:mb-[3rem] lg:mb-[3rem]">
          <h1 className="h1">
            Unleash the Creativity with{" "}
            <span className="inline-block">
              <img src={InspireAIText} alt="Inspire AI" />
            </span>
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 -mt-7 text-n-2 lg:mb-8">
            Discover the limitless potential of AI, where imagination meets
            innovation to create stunning, one-of-a-kind images
          </p>
        </div>
        <div className="relative max-w-[33rem] -mt-[1rem] mb-[5rem] mx-auto md:max-w-5xl xl:mb-24 ">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <img
              src={hero}
              className="rounded-3xl "
              width={1024}
              height={490}
              alt="AI"
            />
            <FakePrompt className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 z-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
