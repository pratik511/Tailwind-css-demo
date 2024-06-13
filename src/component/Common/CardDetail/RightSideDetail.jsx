import { FaStar } from "react-icons/fa";
import Border from "../Border";
import { useState } from "react";

const RightSideDetail = () => {
    const [size, setSize] = useState('')
    return (
        <>
            <div className="grid gap-3">
                <Border>
                    <h1 className="text-base font-semibold opacity-50">Product Name</h1>
                    <h4 className="text-2xl font-medium">₹ 500</h4>
                    <div className="flex items-center gap-2 mt-3">
                        <p className="flex items-center justify-center h-6 gap-1 px-2 font-semibold text-white bg-green-500 w-14 rounded-2xl">
                            <span>3.5</span> <FaStar className="" size={12} />
                        </p>
                        <span className="text-xs text-gray-500">
                            31809 Ratings, 5242 Reviews
                        </span>
                    </div>
                    <p className="flex items-center justify-center w-24 h-6 gap-1 px-2 mt-2 text-xs font-semibold text-gray-600 bg-gray-100 rounded-2xl">
                        Free Delivery
                    </p>
                </Border>
                <Border>
                    <h1 className="text-lg font-semibold">Select Size</h1>
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                        {[
                            "S",
                            "M",
                            "L",
                            "XL",
                            "XXL",
                            "XXXL",
                            "4XL",
                            "5XL",
                            "6XL",
                            "7XL",
                            "8XL",
                            "9XL",
                        ]?.map((item, index) => {
                            const isSelected = item === size;
                            return (
                                <span onClick={() => setSize(item)}
                                    key={index}
                                    className={`flex cursor-pointer items-center justify-center gap-1 px-4 py-0.5 font-medium border text-gray-800 border-gray-500 rounded-2xl hover:bg-blue-200 hover:text-blue-500 hover:border-blue-500 ${isSelected ? "bg-blue-200 text-blue-500 border-blue-500" : ""}`}
                                >
                                    {item}
                                </span>
                            );
                        })}
                    </div>
                </Border>
                <Border>
                    <h1 className="text-lg font-semibold">Product Details</h1>
                    <div className="grid items-center mt-3">
                        <span>Name : anarkali kurti masyla</span>
                        <span>Fabric : Rayon</span>
                        <span>Sleeve Length : Three-Quarter Sleeves</span>
                        <span>Pattern : Solid</span>
                        <span>Combo of : Single</span>
                    </div>
                </Border>
            </div>
        </>
    );
};

export default RightSideDetail;
