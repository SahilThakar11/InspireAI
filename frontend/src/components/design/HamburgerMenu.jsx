import React, { useState } from "react";

const HamburgerMenu = ({ toggleNavigation, isOpen }) => {
  return (
    <div
      onClick={toggleNavigation}
      className="absolute right-10 w-10 h-10 flex flex-col justify-center items-end cursor-pointer lg:hidden"
    >
      <div
        className={`w-8 h-0.5 bg-white rounded-full transform transition-transform duration-500 ease-in-out ${
          isOpen ? "rotate-45 translate-y-2.5" : ""
        }`}
      ></div>
      <div
        className={`w-8 h-0.5 bg-white rounded-full my-1.5 transform transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`w-8 h-0.5 bg-white rounded-full transform transition-transform duration-500 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-2.5" : ""
        }`}
      ></div>
    </div>
  );
};

export default HamburgerMenu;
