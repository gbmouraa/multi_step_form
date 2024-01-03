import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../../formContext";
import validator from "validator";
import Navigation from "../Navigation";

const StepOne = () => {
  const { setCurrentStep } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      {/* Form */}
      <div className="-translate-y-[72px] px-4 md:translate-y-0">
        <div className="rounded-md bg-white px-6 py-7 shadow-sm md:rounded-none md:shadow-none">
          <div>
            <h1 className="mb-2 text-2xl font-bold text-marine-blue">
              Personal info
            </h1>
            <p className="mb-3 text-zinc-400">
              Please provide your name, email address, and phone number.
            </p>
          </div>

          <div className="relative flex flex-col">
            <label className="text-marine-blue">Name</label>
            <input
              type="text"
              className={`${
                errors.name ? "border-red-500" : "border-zinc-200"
              } focus:border-purple-blue mb-3 rounded border  px-4 py-2 font-medium text-marine-blue outline-none`}
              placeholder="e.g. Stephen King"
              {...register("name", { required: true })}
            />

            {errors?.name && (
              <span className="absolute right-0 font-medium text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="relative flex flex-col">
            <label className="text-marine-blue">Email Address</label>
            <input
              type="text"
              className={`${
                errors.email ? "border-red-500" : "border-zinc-200"
              } focus:border-purple-blue mb-3 rounded border px-4 py-2 font-medium text-marine-blue outline-none`}
              placeholder="e.g. stephenking@lorem.com"
              {...register("email", {
                required: true,
                validate: (value) => validator.isEmail(value),
              })}
            />

            {errors?.email?.type === "required" && (
              <span className="absolute right-0 font-medium text-red-500">
                This field is required
              </span>
            )}
            {errors?.email?.type === "validate" && (
              <span className="absolute right-0 font-medium text-red-500">
                Invalid email
              </span>
            )}
          </div>

          <div className="relative flex flex-col">
            <label className="text-marine-blue">Phone Number</label>
            <input
              type="number"
              className={`${
                errors.phoneNumber ? "border-red-500" : "border-zinc-200"
              } focus:border-purple-blue mb-3 rounded border  px-4 py-2 font-medium text-marine-blue outline-none`}
              placeholder="e.g. +1 234 567 890"
              {...register("phoneNumber", { required: true })}
            />

            {errors?.phoneNumber && (
              <span className="absolute right-0 font-medium text-red-500">
                This field is required
              </span>
            )}
          </div>
        </div>
      </div>

      <Navigation onSubmit={() => handleSubmit(onSubmit)()} />
    </div>
  );
};

export default StepOne;
