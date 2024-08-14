import React from "react";

const Link = ({ href, children, target, className }) => {
  return (
    <a
      href={href}
      target={target}
      className={`relative inline-block text-white font-medium group ${
        className || ""
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute left-0 bottom-0 w-full h-0.25 bg-gradient-to-r from-white to-slate-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
      <span className="absolute left-0 bottom-0 w-full h-0.25 border-t-2 border-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
    </a>
  );
};

export default Link;
