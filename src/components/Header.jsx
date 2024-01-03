import { useContext } from "react";
import { FormContext } from "../formContext";

const Header = () => {
  const { steps, currentStep } = useContext(FormContext);

  return (
    <header className="md:bg-desktop-aside min-h-44  bg-mobile-aside bg-cover bg-center bg-no-repeat md:min-w-[260px] md:rounded-lg md:px-5">
      <ul className="flex justify-center gap-x-4 pt-10 md:flex-col md:gap-y-4">
        {steps.map((item, idx) => {
          return (
            <li key={idx} className="items-center md:flex">
              {currentStep === idx + 1 ? (
                <span className="flex h-9 w-9 items-center justify-center rounded-[50%] border border-light-blue bg-light-blue font-bold text-marine-blue">
                  {idx + 1}
                </span>
              ) : (
                <span className="flex h-9 w-9 items-center justify-center rounded-[50%] border border-white font-bold text-white">
                  {idx + 1}
                </span>
              )}

              <div className="ml-4 hidden flex-col md:flex">
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
