import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../../formContext";
import FormContent from "../FormContent";
import validator from "validator";
import Navigation from "../Navigation";

const StepOne = () => {
  const { setCurrentStep, setStorageData, formData, setFormData } =
    useContext(FormContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currentName: localStorage.getItem("currentName") || "",
      currentEmail: localStorage.getItem("currentEmail") || "",
      currentPhoneNumber: localStorage.getItem("currentPhoneNumber") || "",
    },
  });

  useEffect(() => {
    const getFormData = () => {
      if (formData === null) return;

      setValue("currentName", formData.currentName);
      setValue("currentEmail", formData.currentEmail);
      setValue("currentPhoneNumber", formData.currentPhoneNumber);
    };

    getFormData();
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      setFormData({});
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const onSubmit = (data) => {
    setCurrentStep((prevStep) => prevStep + 1);
    setStorageData(data);
    setFormData(data);
  };

  return (
    <FormContent
      title="Personal info"
      description="Please provide your name, email address, and phone number."
      content={
        <>
          <div className="relative mb-4 flex flex-col">
            <label className="mb-1 text-marine-blue">Name</label>
            <input
              type="text"
              className={`${
                errors.currentName
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-200"
              } rounded-lg border px-4  py-2 font-medium text-marine-blue outline-none focus:border-purple-blue`}
              placeholder="e.g. Stephen King"
              {...register("currentName", { required: true })}
            />

            {errors?.currentName && (
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
                errors.currentEmail
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-200"
              } rounded-lg border px-4 py-2 font-medium text-marine-blue outline-none focus:border-purple-blue`}
              placeholder="e.g. stephenking@lorem.com"
              {...register("currentEmail", {
                required: true,
                validate: (value) => validator.isEmail(value),
              })}
            />

            {errors?.currentEmail?.type === "required" && (
              <span className="absolute right-0 font-medium text-red-500">
                This field is required
              </span>
            )}
            {errors?.currentEmail?.type === "validate" && (
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
                errors.currentPhoneNumber
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-200"
              } rounded-lg border px-4  py-2 font-medium text-marine-blue outline-none focus:border-purple-blue`}
              placeholder="e.g. +1 234 567 890"
              {...register("currentPhoneNumber", { required: true })}
            />

            {errors?.currentPhoneNumber && (
              <span className="absolute right-0 font-medium text-red-500">
                This field is required
              </span>
            )}
          </div>
        </>
      }
      nav={<Navigation onSubmit={() => handleSubmit(onSubmit)()} />}
    />
  );
};

export default StepOne;
