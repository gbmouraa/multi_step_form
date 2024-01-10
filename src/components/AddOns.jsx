const AddOns = (props) => {
  return (
    <div className="relative">
      <input
        className="peer absolute left-4 top-2/4 block h-4 w-4  -translate-y-2/4  accent-purple-blue"
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label
        htmlFor={props.id}
        className="peer-label flex cursor-pointer items-center justify-between rounded-lg border border-zinc-200 p-4 pl-11 hover:border-purple-blue hover:bg-alabaster"
      >
        <div className="flex flex-col">
          <span className="font-bold text-marine-blue">{props.title}</span>
          <span className="text-sm text-zinc-400">{props.description}</span>
        </div>
        <span className="text-[13px] text-purple-blue">{props.price}</span>
      </label>
    </div>
  );
};

export default AddOns;
