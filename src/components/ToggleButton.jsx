const ToggleButton = (props) => {
  return (
    <div className="mt-8 rounded-lg bg-alabaster py-3">
      <div className="flex items-center justify-center">
        <input
          type="checkbox"
          className="appearance-none"
          onChange={() => props.setYearly(!props.yearly)}
          id="plan"
        />
        <span
          className={`${
            props.yearly ? "text-zinc-400" : "text-marine-blue"
          } font-medium transition-all`}
        >
          Monthly
        </span>
        <label
          htmlFor="plan"
          className="mx-5 flex h-5 w-[36px]  cursor-pointer items-center rounded-[16px] bg-marine-blue px-1"
        >
          <div
            className={`${
              props.yearly ? "translate-x-4" : ""
            } h-3 w-3 rounded-full bg-white transition-all`}
          />
        </label>
        <span
          className={`${
            props.yearly ? "text-marine-blue" : "text-zinc-400"
          } font-medium transition-all`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default ToggleButton;
