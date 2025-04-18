import useCatFacts from "../../Utils/useCatFacts";


const CatAPI = () => {
  const { data, refetchCatFacts } = useCatFacts();

  return (
    <div className="flex justify-center bg-gray-100 p-6 my-2">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl text-center">
        <h2 className="text-2xl font-bold mb-6 text-purple-700">Random Cat Fact 🐱</h2>
        <p className="text-lg text-gray-800 mb-8">{data?.fact}</p>
        <button
          onClick={refetchCatFacts}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow transition duration-200"
        >
          Get New Fact
        </button>
      </div>
    </div>
  );
};

export default CatAPI;


