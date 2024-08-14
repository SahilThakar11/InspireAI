import React from "react";

const FilledButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-gradient-to-r from-blue-800 to-purple-800 rounded-md shadow-lg overflow-hidden group focus:outline-none"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-sky-700 to-purple-950 opacity-30 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></span>
      <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out transform scale-110 group-hover:scale-100"></span>
      <span className="relative z-10 text-lg font-medium tracking-wider uppercase group-hover:text-cyan-200 transition-colors duration-300 ease-in-out">
        {children}
      </span>

      <span className="absolute inset-0 rounded-md bg-white opacity-0 group-active:opacity-20 group-active:animate-ripple transition-opacity duration-300 ease-in-out"></span>
    </button>
  );
};

export default FilledButton;
