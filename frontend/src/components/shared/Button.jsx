import React from "react";

const Button = ({ children, className, color, border }) => {
  return (
    <button
      className={`relative px-6 py-3 font-bold children-white bg-black border-2 ${
        border || "border-white"
      } rounded-lg overflow-hidden group ${className || ""}`}
    >
      <span
        className={`absolute inset-0 w-full h-full transition duration-300 ease-in-out transform translate-x-full ${
          color || "bg-white"
        } group-hover:-translate-x-0`}
      ></span>
      <span
        className={`relative z-10  group-hover:text-black
        }`}
      >
        {children}
      </span>
      <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-active:opacity-100 group-active:animate-ping"></span>
    </button>
  );
};

export default Button;
