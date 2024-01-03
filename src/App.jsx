import { FormProvider } from "./formContext";
import FormContainer from "./components/FormContainer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen w-full items-center justify-center font-ubuntu md:flex md:bg-magnolia">
      <FormProvider>
        <FormContainer>
          <Header />
        </FormContainer>
      </FormProvider>
    </div>
  );
};

export default App;
