import { createContext, useState } from "react";

const FormContext = createContext({});

const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const steps = [
    { step: "STEP 1", desc: "YOUR INFO" },
    { step: "STEP 2", desc: "SELECT PLAN" },
    { step: "STEP 3", desc: "ADD-ONS" },
    { step: "STEP 4", desc: "SUMMARY" },
  ];

  return (
    <FormContext.Provider
      value={{
        steps,
        currentStep,
        setCurrentStep,
        formData,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
