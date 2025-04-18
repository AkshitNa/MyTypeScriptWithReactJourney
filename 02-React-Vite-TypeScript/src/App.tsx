import CatAPI from "./Components/API/CatAPI";
import ContextAPI from "./Components/ContextAPI/ContextAPI";
import SimpleForm from "./Components/Form/SimpleForm";
import TsFunctionalComp from "./Components/FunctionalComp/TsFunctionalComp";
import UseStateHook from "./Components/Hook/UseStateHook";
import PassMeProps from "./Components/PropsTsx/PassMeProps";
import ReactNodeCardWrapper from "./Components/PropsTsx/ReactNodeCardWrapper";

const App = () => {
  return (
    <>
      <p className="text-center font-bold text-3xl bg-green-500 p-2 mb-1">
        Welcome to React + TypeScript
      </p>
      <p className="text-center font-bold text-3xl bg-purple-500 p-2 my-2">
        My First TypeScript Component
      </p>
      <TsFunctionalComp />
      <p className="text-center font-bold text-3xl bg-purple-500 p-2 my-2">
        My First Props
      </p>
      <PassMeProps message="Hello, Akshit" age={12} height={125} />
      <UseStateHook />
      <p className="text-center font-bold text-3xl bg-purple-500 p-2 mb-1">
        React-Node
      </p>
      <ReactNodeCardWrapper />
      <p className="text-center font-bold text-3xl bg-purple-500 p-2 my-2">
        Calling CAT API
      </p>
      <CatAPI />
      <p className="text-center font-bold text-3xl bg-purple-500 p-2 mb-1">
        Context API Text
      </p>
      <ContextAPI />
      <p className="text-center font-bold text-3xl bg-green-500 p-2 mb-1">
        Form
      </p>
      <SimpleForm />
    </>
  );
};

export default App;
