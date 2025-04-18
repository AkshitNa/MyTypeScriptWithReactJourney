import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div className="flex justify-center bg-gray-100 my-1 p-2">
      <h1 className="text-2xl font-bold mb-4 mx-2">Current Count: {count}</h1>
      <div className="space-x-5">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseStateHook;
