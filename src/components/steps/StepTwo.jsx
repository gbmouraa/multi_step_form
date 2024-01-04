import { useContext } from "react";
import Navigation from "../Navigation";
import { FormContext } from "../../formContext";

const StepTwo = () => {
  const { setCurrentStep } = useContext(FormContext);

  const onSubmit = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <h1>Step Two</h1>
      <Navigation onSubmit={onSubmit} goBack={goBack} />
    </div>
  );
};

export default StepTwo;
