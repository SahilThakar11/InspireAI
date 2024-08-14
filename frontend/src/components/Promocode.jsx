import React, { useState } from "react";
import Heading from "./shared/Heading";
import Link from "./shared/Link";

const Promocode = () => {
  return (
    <div className="mb-[2rem] bg-n-8 border-n-9/70 border lg:w-full rounded-3xl">
      <Heading
        className="mt-3 text-center"
        title="Credit Codes"
        text="Have a Credit Code? Enter it below to enjoy free credits!"
      />

      <div className="w-[20rem] md:w-[33rem] flex mx-auto mb-10 -mt-[2rem] md:-mt-[4rem]">
        <input
          type="text"
          placeholder="Enter Credit Code here"
          className="w-full p-3 text-white bg-n-7 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="w-[30%] -ml-2 bg-white text-black font-bold rounded-r-lg hover:text-gray-900 hover:bg-slate-200">
          Apply
        </button>
      </div>
      <p className="body-2 text-n-4 text-center -mt-[2rem] mb-5">
        Don't have a credit code? No worries! Contact the developer for Codes on{" "}
        <Link
          href="https://www.linkedin.com/in/sahil-thakar/"
          target="_blank"
          className=""
        >
          Linkdin
        </Link>
      </p>
    </div>
  );
};

export default Promocode;
