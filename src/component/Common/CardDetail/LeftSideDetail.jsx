import { useNavigate } from "react-router-dom";
import CartButton from "../CartButton";

const LeftSideDetail = () => {
    const navigate = useNavigate();
    return (
        <>
            <img
                src="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_1280.png"
                alt="Product"
                className="w-full rounded-lg shadow-lg h-[55vh]"
                onClick={() => navigate("/")}
            />
            <div className="flex gap-2">
                <CartButton TColor="blue" IconName="cart" />
                <CartButton BColor="blue" IconName="review" TColor="white" />
            </div>
        </>
    );
};

export default LeftSideDetail;
