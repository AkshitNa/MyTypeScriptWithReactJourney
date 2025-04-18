import ReactNodeCard from "./ReactNodeCard";

const ReactNodeCardWrapper = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-2">
        <ReactNodeCard title="Card One">
          {/* Children as Props */}
          <p>This is a button inside this card.</p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => {
              alert("Thanks for clicking!!");
            }}
          >
            Click me
          </button>
        </ReactNodeCard>

        <ReactNodeCard title="Card Two">
          {/* Children as Props */}
          <p className=" text-sky-400 font-semibold">
            There is some content inside the card.
          </p>
          <ul className="list-none pl-5 space-y-1">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </ReactNodeCard>
      </div>
    </>
  );
};

export default ReactNodeCardWrapper;
