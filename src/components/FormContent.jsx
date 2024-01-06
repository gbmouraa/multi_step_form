const FormContent = ({ title, description, content, nav }) => {
  return (
    <div className="md:h-540px flex-col  justify-between md:flex md:w-[602px] md:px-20">
      {/* Form */}
      <div className="-translate-y-[72px] px-4 md:translate-y-0 md:px-0">
        <div className="rounded-md bg-white px-6 py-7 shadow-sm md:rounded-none md:px-0 md:pb-0 md:pt-10 md:shadow-none">
          <div>
            <h1 className="mb-2 text-2xl font-bold text-marine-blue md:text-3xl">
              {title}
            </h1>
            <p className="mb-6 text-zinc-400">{description}</p>
          </div>
          {content}
        </div>
      </div>
      {nav}
    </div>
  );
};

export default FormContent;
