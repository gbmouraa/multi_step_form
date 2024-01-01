import { useContext } from "react";
import { FormContext } from "../formContext";

const Navigation = (props) => {
  const { currentStep } = useContext(FormContext);

  return (
    <nav className="absolute bottom-0 flex h-20 w-full items-center bg-white px-4">
      {currentStep > 1 && (
        <button
          className="hover:text-marine-blue font-medium text-zinc-400 transition-all"
          onClick={props.goBack}
        >
          Go back
        </button>
      )}

      <button
        className="bg-marine-blue ml-auto rounded-[4px] px-4 py-3 font-medium text-white transition-all hover:opacity-70"
        onClick={props.onSubmit}
      >
        Next Step
      </button>
    </nav>
  );
};

export default Navigation;
