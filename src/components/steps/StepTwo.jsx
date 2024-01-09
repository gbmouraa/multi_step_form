import { useContext, useState, useEffect } from "react";
import ToggleButton from "../ToggleButton";
import Navigation from "../Navigation";
import FormContent from "../FormContent";
import { FormContext } from "../../formContext";
import PlanCard from "../PlanCard";

import arcadeIcon from "../../assets/icon-arcade.svg";
import advancedIcon from "../../assets/icon-advanced.svg";
import proIcon from "../../assets/icon-pro.svg";

const StepTwo = () => {
  const { setCurrentStep, planData, setPlanData } = useContext(FormContext);

  const [planSelected, setPlanSelected] = useState("arcade");
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    const getPlanData = () => {
      const { plan, yearly } = planData;

      if (plan !== undefined && yearly !== undefined) {
        setIsYearly(yearly);
        setPlanSelected(plan);
      }
    };

    getPlanData();
  }, []);

  const onSubmit = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    let data = {
      ...planData,
      plan: planSelected,
      yearly: isYearly,
    };

    setPlanData(data);
  };

  const goBack = () => {
    let data = {
      ...planData,
      plan: planSelected,
      yearly: isYearly,
    };

    setPlanData(data);
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handlePlanSelected = (e) => {
    setPlanSelected(e.target.value);
  };

  const handleIsYearly = () => {
    setIsYearly(!isYearly);
    setPlanData({ ...planData, yearly: isYearly });
  };

  return (
    <FormContent
      title="Select your plan"
      description="You have the option of monthly or yearly biling."
      content={
        <>
          <div>
            {/* inputs */}
            <div className="flex flex-col gap-y-3 md:flex-row md:justify-between">
              <PlanCard
                id="arcade"
                value="arcade"
                icon={arcadeIcon}
                title="Arcade"
                mo="$9/mo"
                yr="$90/yr"
                yearly={isYearly}
                onChange={handlePlanSelected}
                checked={planSelected === "arcade"}
              />

              <PlanCard
                id="advanced"
                value="advanced"
                icon={advancedIcon}
                title="Advanced"
                mo="$12/mo"
                yr="$120/yr"
                yearly={isYearly}
                onChange={handlePlanSelected}
                checked={planSelected === "advanced"}
              />

              <PlanCard
                id="pro"
                value="pro"
                icon={proIcon}
                title="Pro"
                mo="$15/mo"
                yr="$150/yr"
                yearly={isYearly}
                onChange={handlePlanSelected}
                checked={planSelected === "pro"}
              />
            </div>

            <ToggleButton setYearly={handleIsYearly} yearly={isYearly} />
          </div>
        </>
      }
      nav={<Navigation onSubmit={onSubmit} goBack={goBack} />}
    />
  );
};

export default StepTwo;
