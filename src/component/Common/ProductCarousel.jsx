import React from "react";
import Slider from "react-slick";
import Card from "./Card";

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={`${
        props.className.includes("disabled") && "hidden"
      } absolute z-10 transform -translate-y-1/2 bg-white cursor-pointer rounded-3xl top-1/2 -right-2.5 border`}
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
      className={`${
        props.className.includes("disabled") && "hidden"
      } absolute z-10 transform -translate-y-1/2 bg-white cursor-pointer top-1/2 -left-2.5 rounded-3xl border`}
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
    <div className="flex justify-center mb-4">
      <div className="w-[97%]">
        <Slider {...settings}>
          {[0,1,2,3,4,5,6,7,8,9].map((product, index) => (
            <div key={index} className="p-2">
              <Card />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
