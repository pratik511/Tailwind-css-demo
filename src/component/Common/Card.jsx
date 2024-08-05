import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto">
        <div className="overflow-hidden bg-white rounded-lg shadow-md" onClick={() => navigate("/product")}>
          <img
            src={`https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_1280.png`}
            alt="Product"
            className="object-cover w-full h-64 transition-transform transform hover:scale-105"
          />

          <div className="p-3 sm:p-4">
            <h2 className="mb-2 text-xl font-semibold">Product Name</h2>
            <p className="mb-4 text-gray-600">
              Product description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-blue-500 sm:text-lg">$49.99</p>
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
