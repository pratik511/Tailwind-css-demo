const Card = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={`https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_1280.png`}
            alt="Product"
            className="w-full h-64 object-cover transition-transform transform hover:scale-105"
          />

          <div className="p-3 sm:p-4">
            <h2 className="text-xl font-semibold mb-2">Product Name</h2>
            <p className="text-gray-600 mb-4">
              Product description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm sm:text-lg font-semibold text-blue-500">$49.99</p>
              <button className="bg-blue-500 text-white px-2 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
