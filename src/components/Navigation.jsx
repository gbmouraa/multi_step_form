import { useContext } from "react";
import { FormContext } from "../formContext";

const Navigation = (props) => {
  const { currentStep } = useContext(FormContext);

  return (
    <nav className="absolute bottom-0  flex h-20 w-full items-center bg-white px-4 md:static">
      {currentStep > 1 && (
        <button
          className="font-medium text-zinc-400 transition-all hover:text-marine-blue"
          onClick={props.goBack}
        >
          Go back
        </button>
      )}

      <button
        className="ml-auto rounded-[4px] bg-marine-blue px-4 py-3 font-medium text-white transition-all hover:opacity-70"
        onClick={props.onSubmit}
      >
        Next Step
      </button>
    </nav>
  );
};

export default Navigation;
