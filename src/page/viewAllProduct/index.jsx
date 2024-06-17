import React from "react";
import Sidebar from "./Sidebar";
import ProductsGrid from "./ProductsGrid";

const ViewAllProduct = () => {
  return (
    <div className="w-full h-auto p-4 pb-6 mx-auto 2xl:container">
      <h2 className="text-3xl font-medium">Products For You</h2>
      <div className="flex">
        <Sidebar />
        <ProductsGrid />
      </div>
    </div>
  );
};

export default ViewAllProduct;
