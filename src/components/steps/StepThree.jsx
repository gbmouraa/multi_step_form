import { useContext } from "react";
import { FormContext } from "../../formContext";
import Navigation from "../Navigation";

const StepThree = () => {
  const { setCurrentStep } = useContext(FormContext);

  const onSubmit = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <h1>Step Three</h1>
      <Navigation onSubmit={onSubmit} goBack={goBack} />
    </div>
  );
};

export default StepThree;
