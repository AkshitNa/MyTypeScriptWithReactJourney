import { useCountContext} from "../../Context/CounterProvider";

const ContextAPI = () => {
  const { editCount, setEditCount } = useCountContext();

  return (
    <div className="flex justify-center my-2 bg-gray-100 p-4">
      <p className="text-xl font-semibold text-gray-800 mb-4 mx-5">
        My Count is {editCount}
      </p>

      <button
        onClick={() => setEditCount(editCount + 1)}
        className="px-2 py-1 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
      >
        Click me
      </button>
    </div>
  );
};

export default ContextAPI;



