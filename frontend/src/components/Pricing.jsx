import React from "react";
import Heading from "../components/shared/Heading";
import PricingList from "./PricingList";
import PromoCode from "./Promocode";

const Pricing = () => {
  return (
    <div className="overflow-hidden " id="pricing">
      <div className="container relative z-2">
        <Heading
          title="Choose Your Plan"
          text="Flexible Plans for Every Creative Journey—Choose the Perfect Fit for Your Imagination!"
        />
        <div className="flex justify-center">
          <PricingList />
        </div>
        <div className="relative">
          <PromoCode />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
