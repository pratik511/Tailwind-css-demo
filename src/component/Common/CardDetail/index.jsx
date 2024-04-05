import LeftSideDetail from "./LeftSideDetail";
import RightSideDetail from "./RightSideDetail";

const CardDetail = () => {

  return (
    <div className="container w-full h-auto p-4 mx-auto">
      <div className="flex flex-col w-full md:gap-2 md:flex-row">
        <div className="grid gap-2 w-full md:max-w-[40%] max-h-[80vh] md:max-h-[40vh]">
          <LeftSideDetail />
        </div>
        <div className="w-full md:!max-w-[60%] py-4 md:p-4">
          <RightSideDetail />
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
