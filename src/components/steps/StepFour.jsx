import { useContext, useState } from "react";
import { FormContext } from "../../formContext";
import FormContent from "../FormContent";
import Navigation from "../Navigation";

import Final from "./Final";

const StepFour = () => {
  const {
    setCurrentStep,
    plan,
    isYearly,
    onlineService,
    largerStorage,
    customizableProfile,
  } = useContext(FormContext);

  const [isFinished, setIsFinished] = useState(false);

  let totalPrice;
  let price;
  const planPrice = () => {
    if (plan === "arcade") price = 9;
    if (plan === "advanced") price = 12;
    if (plan === "pro") price = 15;

    if (isYearly) price = price * 10;
    totalPrice = price;
  };

  planPrice();

  let addOns = [];
  const calcAddOns = () => {
    if (onlineService) {
      addOns.push({ desc: "Online service", price: isYearly ? 10 : 1 });
    }
    if (largerStorage) {
      addOns.push({ desc: "Larger storage", price: isYearly ? 20 : 2 });
    }
    if (customizableProfile) {
      addOns.push({ desc: "Customizable Profile", price: isYearly ? 20 : 2 });
    }
  };

  calcAddOns();

  const calcTotalPrice = () => {
    if (!addOns) return;

    let addOnsPrice;
    addOnsPrice = addOns.reduce((count, element) => count + element.price, 0);
    totalPrice = totalPrice + addOnsPrice;
  };

  calcTotalPrice();

  const goBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return isFinished ? (
    <Final />
  ) : (
    <FormContent
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
      content={
        <>
          <div className="rounded-lg bg-alabaster p-4">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <div className="flex flex-col text-left">
                <span className="font-bold capitalize text-marine-blue">
                  {`${plan} (${isYearly ? "Yearly" : "Monthly"})`}
                </span>
                <button
                  onClick={() => setCurrentStep(2)}
                  className="w-fit text-sm text-zinc-400 underline transition-all hover:text-purple-blue"
                >
                  Change
                </button>
              </div>
              <span className="font-bold text-marine-blue">{`$${price}/${
                isYearly ? "yr" : "mo"
              }`}</span>
            </div>

            {addOns &&
              addOns.map((item, idx) => {
                return (
                  <div className="mt-3 flex justify-between" key={idx}>
                    <span className="text-zinc-400">{item.desc}</span>
                    <span className="font-medium text-marine-blue">{`+$${
                      item.price
                    }/${isYearly ? "yr" : "mo"}`}</span>
                  </div>
                );
              })}
          </div>
          {/* total price */}
          <div className="mt-5 flex justify-between px-3">
            <span className="text-zinc-400">
              Total (per {isYearly ? "year" : "month"})
            </span>
            <span className="font-bold text-purple-blue">{`+$${totalPrice}/${
              isYearly ? "yr" : "mo"
            }`}</span>
          </div>
        </>
      }
      nav={<Navigation goBack={goBack} confirm={() => setIsFinished(true)} />}
    />
  );
};

export default StepFour;
