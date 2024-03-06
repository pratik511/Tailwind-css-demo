import { FaStar } from "react-icons/fa"
import Border from "../Border"

const RightSideDetail = () => {

    return (
        <>
            <div className="grid gap-3">
                <Border>
                    <h1 className="text-lg font-semibold opacity-50">Product Name</h1>
                    <h4 className="text-2xl font-medium">₹ 500</h4>
                    <div className="flex items-center gap-2 mt-3">
                        <p className="flex items-center justify-center h-6 gap-1 px-2 font-semibold text-white bg-green-500 w-14 rounded-2xl">
                            <span>3.5</span> <FaStar className="" size={12} />
                        </p>
                        <span className="text-xs text-gray-500">31809 Ratings, 5242 Reviews</span>
                    </div>
                    <p className="flex items-center justify-center w-24 h-6 gap-1 px-2 mt-2 text-xs font-semibold text-gray-600 bg-gray-100 rounded-2xl">
                        Free Delivery
                    </p>
                </Border>
                <Border>
                    <h1 className="text-lg font-semibold">Select Size</h1>
                    <h4 className="text-2xl font-medium">₹ 500</h4>
                    <div className="flex items-center gap-2 mt-3">
                        <p className="flex items-center justify-center h-6 gap-1 px-2 font-semibold text-white bg-green-500 w-14 rounded-2xl">
                            <span>3.5</span> <FaStar className="" size={12} />
                        </p>
                        <span className="text-xs text-gray-500">31809 Ratings, 5242 Reviews</span>
                    </div>
                    <p className="flex items-center justify-center w-24 h-6 gap-1 px-2 mt-2 text-xs font-semibold text-gray-600 bg-gray-100 rounded-2xl">
                        Free Delivery
                    </p>
                </Border>
            </div>
            <p className="mb-4 text-gray-600">
                Product description goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
            </p>
            <p className="mb-4 text-gray-600">
                Product description goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
            </p>
            <p className="mb-4 text-gray-600">
                Product description goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
            </p>
            <p className="mb-4 text-gray-600">
                Product description goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
            </p>
            <p className="mb-4 text-gray-600">
                Product description goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
            </p>

            <p className="mb-4 text-xl font-semibold text-blue-500">$49.99</p>

            <div className="flex items-center space-x-4">
                <button
                    id="addToCart"
                    className="px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add to Cart
                </button>
                <p id="cartStatus" className="hidden font-semibold text-green-500">
                    Added to Cart
                </p>
            </div>
        </>
    )
}

export default RightSideDetail