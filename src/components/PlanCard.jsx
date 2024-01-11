const PlanCard = (props) => {
  return (
    <div className="md:w-[31%]">
      <input
        className="peer absolute appearance-none"
        type="radio"
        name="plan"
        id={props.id}
        checked={props.checked}
        value={props.value}
        onChange={props.onChange}
      />
      <label
        htmlFor={props.id}
        className="peer-label flex cursor-pointer items-center gap-x-3 rounded-lg border border-zinc-200 p-4 hover:border-purple-blue md:flex-col md:items-start"
      >
        <img src={props.icon} alt="illustration" className="md:mb-10" />
        <div className="flex flex-col">
          <span className="font-bold text-marine-blue">{props.title}</span>
          <span className="text-sm text-zinc-400">
            {props.yearly ? props.yr : props.mo}
          </span>
          {props.yearly && (
            <span className="text-sm text-marine-blue">2 months free</span>
          )}
        </div>
      </label>
    </div>
  );
};

export default PlanCard;
