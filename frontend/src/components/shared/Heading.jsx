import React from "react";

const Heading = ({ className, title, text }) => {
  return (
    <>
      <div
        className={`${className} max-w-[50rem] mx-auto mb-10 lg:mb-20 text-center`}
      >
        {title && <h2 className="h2">{title}</h2>}
        {text && (
          <p className="body-1 max-w-[20rem] md:max-w-3xl mx-auto text-n-2 lg:mb-8 ">
            {text}
          </p>
        )}
      </div>
    </>
  );
};

export default Heading;
