import { useContext } from "react";
import { FormContext } from "../formContext";

const Header = () => {
  const { steps } = useContext(FormContext);

  return (
    <header className="min-h-40 bg-mobile-aside">
      <ul className="flex justify-center gap-x-4 pt-10">
        {steps.map((item, idx) => {
          return (
            <li key={idx}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white font-medium text-white">
                {idx + 1}
              </span>
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
