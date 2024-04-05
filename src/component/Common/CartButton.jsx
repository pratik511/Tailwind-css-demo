/* eslint-disable react/prop-types */
import { FaAngleDoubleRight, FaShoppingCart } from "react-icons/fa"

const CartButton = ({ TColor, BColor, IconName }) => {

    const TextColor = (data) => {
        return data === 'blue' ? "text-blue-500 border-blue-500" : data === "white" ? "text-white border-white" : "text-gray-950 border-gray-900"
    }
    const bgColor = (data) => {
        return data === 'blue' ? "bg-blue-500" : "bg-transparent"
    }
    const IconData = (data) => {
        return data === "cart" ? <FaShoppingCart className={`${TextColor(TColor)}`} /> : data === "review" ? <FaAngleDoubleRight className={`${TextColor(TColor)}`} size={18} /> : ""
    }
    return (
        <button
            className={`flex justify-center items-center gap-1.5 w-full px-6 py-2.5 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 ${TextColor(TColor)} ${bgColor(BColor)} `}
        >
            {IconData(IconName)} Add to Cart
        </button>
    )
}

export default CartButton