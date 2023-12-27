import Step1 from "../steps/Step1";

const FormContainer = ({ children }) => {
  return (
    <div>
      {children}
      <Step1 />
    </div>
  );
};

export default FormContainer;
