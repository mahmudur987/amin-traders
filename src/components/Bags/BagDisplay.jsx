/* eslint-disable react/prop-types */

const BagDisplay = ({ bags }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {bags.map((bag) => (
        <div key={bag.id} className="bg-white p-4 rounded-lg shadow-lg">
          <img src={bag.image} alt={bag.name} className="w-full h-80" />
          <h2 className="text-xl font-semibold mt-2">{bag.name}</h2>
          <p className="text-gray-700">Material: {bag.material}</p>
          <p className="text-gray-700">Color: {bag.color}</p>
          <p className="text-gray-700">Size: {bag.size}</p>
          <p className="text-green-600 font-semibold">
            Phone Number :01500010000 (call for order and Details)
          </p>
        </div>
      ))}
    </div>
  );
};

export default BagDisplay;
