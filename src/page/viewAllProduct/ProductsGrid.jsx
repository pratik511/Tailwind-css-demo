import React from 'react';
import Card from '../../component/Common/Card';

const products = [
  { id: 1, title: 'Trendy Alluring Women B...', price: '₹134', rating: '3.7', reviews: '47501 Reviews', image: 'path_to_image1' },
  { id: 2, title: 'Useful Extension Boards', price: '₹156', rating: '3.7', reviews: '100247 Reviews', image: 'path_to_image2' },
  { id: 3, title: 'Classy Head Showers (Wi...', price: '₹99', rating: '3.8', reviews: '48097 Reviews', image: 'path_to_image3' },
  { id: 1, title: 'Trendy Alluring Women B...', price: '₹134', rating: '3.7', reviews: '47501 Reviews', image: 'path_to_image1' },
  { id: 2, title: 'Useful Extension Boards', price: '₹156', rating: '3.7', reviews: '100247 Reviews', image: 'path_to_image2' },
  { id: 3, title: 'Classy Head Showers (Wi...', price: '₹99', rating: '3.8', reviews: '48097 Reviews', image: 'path_to_image3' },
  { id: 1, title: 'Trendy Alluring Women B...', price: '₹134', rating: '3.7', reviews: '47501 Reviews', image: 'path_to_image1' },
  { id: 2, title: 'Useful Extension Boards', price: '₹156', rating: '3.7', reviews: '100247 Reviews', image: 'path_to_image2' },
  { id: 3, title: 'Classy Head Showers (Wi...', price: '₹99', rating: '3.8', reviews: '48097 Reviews', image: 'path_to_image3' },
  { id: 1, title: 'Trendy Alluring Women B...', price: '₹134', rating: '3.7', reviews: '47501 Reviews', image: 'path_to_image1' },
  { id: 2, title: 'Useful Extension Boards', price: '₹156', rating: '3.7', reviews: '100247 Reviews', image: 'path_to_image2' },
  { id: 3, title: 'Classy Head Showers (Wi...', price: '₹99', rating: '3.8', reviews: '48097 Reviews', image: 'path_to_image3' },
];

const ProductsGrid = () => {
  return (
    <div className="w-3/4 p-4">
      <h1 className="mb-4 text-xl font-bold">Products For You</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(product => (
            <Card key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
