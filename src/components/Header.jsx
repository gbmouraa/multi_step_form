import { useContext } from "react";
import { FormContext } from "../formContext";

const Header = () => {
  const { steps, currentStep } = useContext(FormContext);

  return (
    <header className="min-h-40 bg-mobile-aside bg-cover bg-no-repeat">
      <ul className="flex justify-center gap-x-4 pt-10">
        {steps.map((item, idx) => {
          return (
            <li key={idx}>
              {currentStep === idx + 1 ? (
                <span className="border-light-blue bg-light-blue text-marine-blue flex h-9 w-9 items-center justify-center rounded-full border font-bold">
                  {idx + 1}
                </span>
              ) : (
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white font-bold text-white">
                  {idx + 1}
                </span>
              )}

              <div className="hidden md:block">
                <span>{item.step}</span>
                <span>{item.desc}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
