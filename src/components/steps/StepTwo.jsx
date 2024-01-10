import { useContext } from "react";
import ToggleButton from "../ToggleButton";
import Navigation from "../Navigation";
import FormContent from "../FormContent";
import { FormContext } from "../../formContext";
import PlanCard from "../PlanCard";

import arcadeIcon from "../../assets/icon-arcade.svg";
import advancedIcon from "../../assets/icon-advanced.svg";
import proIcon from "../../assets/icon-pro.svg";

const StepTwo = () => {
  const { setCurrentStep, plan, setPlan, isYearly, setIsYearly } =
    useContext(FormContext);

  const onSubmit = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handlePlanSelected = (e) => {
    setPlan(e.target.value);
  };

  const handleIsYearly = () => {
    setIsYearly(!isYearly);
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
                checked={plan === "arcade"}
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
                checked={plan === "advanced"}
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
                checked={plan === "pro"}
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
