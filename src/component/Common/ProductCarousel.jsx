import React from 'react';
import Slider from 'react-slick';

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-8 h-8 text-gray-700 hover:text-gray-900"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12.293 9.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414-1.414L11.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-8 h-8 text-gray-700 hover:text-gray-900"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.707 10.707a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 1.414L8.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

const ProductCarousel = ({ products }) => {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    // slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} className="p-4">
          <div className="relative bg-white rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="absolute top-2 right-2">
              <button className="bg-white p-2 rounded-full shadow-md text-red-500 hover:text-red-600 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 4.318c1.636-1.73 4.364-1.73 6 0 1.637 1.731 1.637 4.536 0 6.267l-5.553 5.88a1 1 0 01-1.394 0L5.447 10.585c-1.637-1.731-1.637-4.536 0-6.267 1.636-1.73 4.364-1.73 6 0zM12 2c-2.244 0-4.49.88-6.222 2.68-3.144 3.33-3.144 8.72 0 12.05l5.553 5.88a3 3 0 004.338 0l5.553-5.88c3.144-3.33 3.144-8.72 0-12.05C16.49 2.88 14.244 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ProductCarousel;
