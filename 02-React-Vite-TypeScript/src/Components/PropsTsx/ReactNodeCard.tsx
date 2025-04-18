//Create a Card
interface CardProps {
  title: string;
  children: React.ReactNode; //It will allow wrapping.
}

const ReactNodeCard = ({ title, children }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      <h2 className="text-xl text-center font-semibold mb-4">{title}</h2>

      {/* It will display all the components which are passed as props. */}
      <div className="text-gray-700 text-center">{children}</div>
    </div>
  );
};

export default ReactNodeCard;


