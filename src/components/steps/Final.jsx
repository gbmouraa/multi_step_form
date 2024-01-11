import FormContent from "../FormContent";
import iconThankYou from "../../assets/icon-thank-you.svg";

const Final = () => {
  return (
    <FormContent
      content={
        <div className="mt-[20%] pb-12 md:pb-0">
          <div className="text-center">
            <img
              src={iconThankYou}
              alt="illustration"
              className="mb-5 inline-block w-14 md:w-auto"
            />
            <h1 className="mb-3 text-3xl font-bold text-marine-blue">
              Thank you!
            </h1>
            <p className="text-zinc-400">
              Thanks for confirming your subscription! We hope you have fun
              using our plataform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </div>
        </div>
      }
    />
  );
};
export default Final;
