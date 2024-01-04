import StepOne from "./steps/StepOne";

const FormContainer = ({ children }) => {
  return (
    <div className="relative h-screen w-full bg-magnolia md:flex md:h-fit md:w-fit md:rounded-xl md:bg-white md:p-4 md:shadow-md">
      {/* Header */}
      {children}

      {/* Form steps */}
      <StepOne />
    </div>
  );
};

export default FormContainer;
