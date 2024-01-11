import { useContext, useState, useEffect } from "react";
import { FormContext } from "../formContext";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

const FormContainer = ({ children }) => {
  const { currentStep } = useContext(FormContext);
  const [isVisible, setIsVisible] = useState(false);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      default:
        return <StepOne />;
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-magnolia transition-opacity duration-700 ease-in md:flex md:min-h-0 md:w-fit md:rounded-xl md:bg-white md:p-4 md:shadow-md ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      id="form-container"
    >
      {/* Header */}
      {children}

      {/* Form steps */}
      {renderStep()}
    </div>
  );
};

export default FormContainer;
