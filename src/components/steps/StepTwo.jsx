import { useContext, useState } from "react";
import Navigation from "../Navigation";
import FormContent from "../FormContent";
import { FormContext } from "../../formContext";
import PlanCard from "../PlanCard";

import arcadeIcon from "../../assets/icon-arcade.svg";
import advancedIcon from "../../assets/icon-advanced.svg";
import proIcon from "../../assets/icon-pro.svg";

const StepTwo = () => {
  const { setCurrentStep } = useContext(FormContext);

  const [yearly, setYearly] = useState(false);

  const onSubmit = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
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
                icon={arcadeIcon}
                title="Arcade"
                mo="$9/mo"
                yr="$90/yr"
                yearly={yearly}
              />

              <PlanCard
                id="advanced"
                icon={advancedIcon}
                title="Advanced"
                mo="$12/mo"
                yr="$120/yr"
                yearly={yearly}
              />

              <PlanCard
                id="pro"
                icon={proIcon}
                title="Pro"
                mo="$15/mo"
                yr="$150/yr"
                yearly={yearly}
              />
            </div>
          </div>
        </>
      }
      nav={<Navigation onSubmit={onSubmit} goBack={goBack} />}
    />
  );
};

export default StepTwo;
