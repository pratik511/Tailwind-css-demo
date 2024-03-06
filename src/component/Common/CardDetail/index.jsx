import { useNavigate } from "react-router-dom";
import RightSideDetail from "./RightSideDetail";

const CardDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="container w-full h-auto p-4 mx-auto">
      <div className="flex flex-col w-full md:gap-5 md:flex-row">
        <div className="w-full md:max-w-[40%] max-h-[80vh] md:max-h-[40vh]">
          <img
            src="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_1280.png"
            alt="Product"
            className="w-full rounded-lg shadow-lg h-[55vh]"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="w-full md:!max-w-[60%] py-4 md:p-4">
          <RightSideDetail />
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
