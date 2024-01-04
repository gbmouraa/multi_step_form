import { useContext } from "react";
import { FormContext } from "../../formContext";
import Navigation from "../Navigation";

const StepFour = () => {
  const { setCurrentStep } = useContext(FormContext);

  const onSubmit = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <h1>Step Four</h1>
      <Navigation onSubmit={onSubmit} goBack={goBack} />
    </div>
  );
};

export default StepFour;
