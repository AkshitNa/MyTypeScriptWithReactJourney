// Since, props is an object. Therefore, we define an Iterface for it.
// Define a type for the component props

// Blueprint for an object.
interface MyFirstTsxProps {
  message: string; //accepts a string
  age: number; //accepts a number
  height?: number; // height is optional
}

// We're destructuring props and telling TypeScript that they match the MyFirstTsxProps interface.
const PassMeProps = ({message, age, height = 165} : MyFirstTsxProps) => {
  return (
    <div className="border-2 border-black p-1 bg-amber-200 text-2xl font-semibold">
      <h1>{message}</h1>
      <p>Your age is: {age}</p>
      <p> Your height is: {height}</p>
    </div>
  );
};

export default PassMeProps;

/* Not Recommended

const PassMeProps = (props: MyFirstTsxProps) => {
  return (
    <div className="border-2 border-black p-1 bg-amber-200 text-2xl font-semibold">
      <h1>{props.message}</h1>
      <p>Your age is: {props.age}</p>
    </div>
  );
};

*/
