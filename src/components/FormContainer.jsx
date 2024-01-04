import { useContext } from "react";
import { FormContext } from "../formContext";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

const FormContainer = ({ children }) => {
  const { currentStep } = useContext(FormContext);

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

  return (
    <div className="relative h-screen w-full bg-magnolia md:flex md:h-fit md:w-fit md:rounded-xl md:bg-white md:p-4 md:shadow-md">
      {/* Header */}
      {children}

      {/* Form steps */}
      {renderStep()}
    </div>
  );
};

export default FormContainer;
