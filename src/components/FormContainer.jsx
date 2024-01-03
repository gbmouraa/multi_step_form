import StepOne from "./steps/StepOne";

const FormContainer = ({ children }) => {
  return (
    <div className="relative h-screen w-full  bg-magnolia  md:flex md:h-fit md:w-fit md:rounded-lg md:bg-white md:p-4">
      {/* Header */}
      {children}

      {/* Form steps */}
      <StepOne />
    </div>
  );
};

export default FormContainer;
