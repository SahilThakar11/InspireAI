import React from "react";
import { pricing } from "../constants";
import Button from "./shared/Button";
import check from "../assets/svg/check.svg";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap mb-[2rem] w-full sm:justify-center">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[25rem]  lg:w-full lg:h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] py-8 my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 hover:bg-n-9/10 hover:border-n-6/50 hover:shadow-lg"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <div className="mb-4 w-full">
            <Button
              className="w-full"
              color={`${item.title === "Free" ? "bg-color-2" : "bg-color-1"}`}
              border={`${
                item.title === "Free" ? "border-color-2" : "border-color-1"
              }`}
            >
              Get started
            </Button>
          </div>
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
