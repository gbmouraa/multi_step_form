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
    <div className="flex-col justify-between md:flex md:px-20">
      {/* Form */}
      <div className="-translate-y-[72px] px-4 md:translate-y-0 md:px-0">
        <div className="rounded-md bg-white px-6 py-7 shadow-sm md:rounded-none md:px-0 md:pb-0 md:pt-10 md:shadow-none">
          <div>
            <h1 className="mb-2 text-2xl font-bold text-marine-blue md:text-3xl">
              Personal info
            </h1>
            <p className="mb-6 text-zinc-400">
              Please provide your name, email address, and phone number.
            </p>
          </div>

          <div className="relative mb-4 flex flex-col">
            <label className="mb-1 text-marine-blue">Name</label>
            <input
              type="text"
              className={`${
                errors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-200"
              } rounded-lg border px-4  py-2 font-medium text-marine-blue outline-none focus:border-purple-blue`}
              placeholder="e.g. Stephen King"
              {...register("name", { required: true })}
            />

            {errors?.name && (
              <span className="absolute right-0 font-medium text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="relative mb-4 flex flex-col">
            <label className="mb-1 text-marine-blue">Email Address</label>
            <input
              type="text"
              className={`${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-200"
              } rounded-lg border px-4 py-2 font-medium text-marine-blue outline-none focus:border-purple-blue`}
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

          <div className="relative mb-4 flex flex-col">
            <label className="mb-1 text-marine-blue">Phone Number</label>
            <input
              type="number"
              className={`${
                errors.phoneNumber
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-200"
              } rounded-lg border px-4  py-2 font-medium text-marine-blue outline-none focus:border-purple-blue`}
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
