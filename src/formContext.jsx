import { createContext, useState } from "react";

const FormContext = createContext({});

const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [personalData, setPersonalData] = useState({});

  const [plan, setPlan] = useState("arcade");
  const [isYearly, setIsYearly] = useState(false);

  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);

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
        personalData,
        setPersonalData,
        plan,
        setPlan,
        isYearly,
        setIsYearly,
        onlineService,
        setOnlineService,
        largerStorage,
        setLargerStorage,
        customizableProfile,
        setCustomizableProfile,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
