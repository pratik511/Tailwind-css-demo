const CardDetail = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_1280.png"
            alt="Product"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-3xl font-semibold">Product Name</h1>
          <p className="text-gray-600 mb-4">
            Product description goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <p className="text-xl text-blue-500 font-semibold mb-4">$49.99</p>

          <div className="flex items-center space-x-4">
            <button
              id="addToCart"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add to Cart
            </button>
            <p id="cartStatus" className="text-green-500 font-semibold hidden">
              Added to Cart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
