import LeftSideDetail from "./LeftSideDetail";
import RightSideDetail from "./RightSideDetail";
import ProductCarousel from "../ProductCarousel";

const CardDetail = () => {
  return (
    <>
      <div className="container w-full h-auto p-4 pb-6 mx-auto sm:pb-16 xl:pb-28">
        <div className="flex flex-col w-full md:gap-2 md:flex-row">
          <div className="grid gap-2 w-full md:max-w-[40%] max-h-[80vh] md:max-h-[40vh]">
            <LeftSideDetail />
          </div>
          <div className="w-full md:!max-w-[60%] py-4 md:p-4">
            <RightSideDetail />
          </div>
        </div>
      </div>
      <ProductCarousel />
    </>
  );
};

export default CardDetail;
