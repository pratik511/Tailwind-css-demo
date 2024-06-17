import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/4 p-4 border-r">
      <h2 className="mb-4 text-lg font-bold">Filters</h2>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="sort">
          Sort by:
        </label>
        <select id="sort" className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded">
          <option value="relevance">Relevance</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="mb-4">
        <h3 className="mb-2 font-bold text-md">Category</h3>
        <div>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2 leading-tight" />
            <span className="text-gray-700">Women T-shirts</span>
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2 leading-tight" />
            <span className="text-gray-700">Women Tops And Tunics</span>
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2 leading-tight" />
            <span className="text-gray-700">Bedsheets</span>
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2 leading-tight" />
            <span className="text-gray-700">Bike Covers</span>
          </label>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2 leading-tight" />
            <span className="text-gray-700">Blouses</span>
          </label>
          {/* Add more categories as needed */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
