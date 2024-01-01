import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../../formContext";
import Navigation from "../Navigation";

const StepOne = () => {
  const { setCurrentStep } = useContext(FormContext);

  const onSubmit = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      {/* Form */}
      <div className="-translate-y-[72px] px-4">
        <div className="rounded-md bg-white px-6 py-7 shadow-sm">
          <div>
            <h1 className="text-marine-blue text-2xl font-bold">
              Personal info
            </h1>
            <p className="text-zinc-400">
              Please provide your name, email address, and phone number.
            </p>
          </div>

          <div className="flex flex-col">
            <label>Name</label>
            <input type="text" placeholder="e.g. Stephen King" />
          </div>

          <div className="flex flex-col">
            <label>Email Address</label>
            <input type="text" placeholder="e.g. stephenking@lorem.com" />
          </div>

          <div className="flex flex-col">
            <label>Phone Number</label>
            <input type="number" placeholder="e.g. +1 234 567 890" />
          </div>
        </div>
      </div>

      <Navigation onSubmit={onSubmit} />
    </div>
  );
};

export default StepOne;
