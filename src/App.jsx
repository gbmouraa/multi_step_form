import { FormProvider } from "./formContext";
import Header from "./components/Header";

const App = () => {
  return (
    <FormProvider>
      <div className="min-h-screen w-full font-ubuntu">
        {/* form container */}
        <div>
          <Header />
        </div>
      </div>
    </FormProvider>
  );
};

export default App;
