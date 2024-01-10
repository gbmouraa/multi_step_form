import { useContext } from "react";
import { FormContext } from "../../formContext";
import AddOns from "../AddOns";
import FormContent from "../FormContent";
import Navigation from "../Navigation";

const StepThree = () => {
  const {
    setCurrentStep,
    isYearly,
    onlineService,
    setOnlineService,
    largerStorage,
    setLargerStorage,
    customizableProfile,
    setCustomizableProfile,
  } = useContext(FormContext);

  const onSubmit = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <FormContent
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
      content={
        <>
          <div className="flex flex-col gap-y-3">
            <AddOns
              title="Online service"
              description="Access to multiplayer games"
              id="online-service"
              price={isYearly ? "+$10/yr" : "+$1/mo"}
              checked={onlineService}
              onChange={(e) => setOnlineService(e.target.checked)}
            />

            <AddOns
              title="Larger storage"
              description="Extra 1TB of cloud save"
              id="larger-storage"
              price={isYearly ? "+$20/yr" : "+$2/mo"}
              checked={largerStorage}
              onChange={(e) => setLargerStorage(e.target.checked)}
            />

            <AddOns
              title="Customizable profile"
              description="Custom theme on your profile"
              id="customizable-profile"
              price={isYearly ? "+$20/yr" : "+$2/mo"}
              checked={customizableProfile}
              onChange={(e) => setCustomizableProfile(e.target.checked)}
            />
          </div>
        </>
      }
      nav={<Navigation onSubmit={onSubmit} goBack={goBack} />}
    />
  );
};

export default StepThree;
