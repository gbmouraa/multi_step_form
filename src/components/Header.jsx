import { useContext } from "react";
import { FormContext } from "../formContext";

const Header = () => {
  const { steps, currentStep } = useContext(FormContext);

  return (
    <header className="min-h-44 bg-mobile-aside bg-cover bg-center bg-no-repeat md:h-[540px] md:min-w-[260px] md:rounded-lg md:bg-desktop-aside md:px-5">
      <ul className="flex justify-center gap-x-4 pt-10 md:flex-col md:gap-y-6">
        {steps.map((item, idx) => {
          return (
            <li key={idx} className="items-center md:flex">
              {currentStep === idx + 1 ? (
                <span className="flex h-9 w-9 items-center justify-center rounded-[50%] border border-light-blue bg-light-blue font-bold text-marine-blue">
                  {idx + 1}
                </span>
              ) : (
                <span className="flex h-9 w-9 items-center justify-center rounded-[50%] border border-white font-bold text-magnolia">
                  {idx + 1}
                </span>
              )}

              <div className="ml-4 hidden flex-col md:flex">
                <span className="text-xs text-pastel-blue">{item.step}</span>
                <span className="text-sm font-medium text-magnolia">
                  {item.desc}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
