import { useContext } from "react";
import { FormContext } from "../formContext";

const Navigation = (props) => {
  const { currentStep } = useContext(FormContext);

  return (
    <nav className="fixed bottom-0 flex h-20 w-full items-center bg-white px-4 md:static md:px-0">
      {currentStep > 1 && (
        <button
          className="font-medium text-zinc-400 transition-all hover:text-marine-blue"
          onClick={props.goBack}
        >
          Go back
        </button>
      )}

      {currentStep < 4 ? (
        <button
          className="ml-auto rounded-lg bg-marine-blue px-4 py-3 font-medium text-white transition-all hover:opacity-70"
          onClick={props.onSubmit}
        >
          Next Step
        </button>
      ) : (
        <button
          className="ml-auto rounded-lg bg-purple-blue px-4 py-3 font-medium text-white transition-all hover:opacity-70"
          onClick={props.confirm}
        >
          Confirm
        </button>
      )}
    </nav>
  );
};

export default Navigation;
