import StepOne from "./steps/StepOne";
import Navigation from "./Navigation";

const FormContainer = ({ children }) => {
  return (
    <div className="bg-magnolia relative h-screen w-full">
      {/* Header */}
      {children}

      {/* Form steps */}
      <StepOne />
    </div>
  );
};

export default FormContainer;
