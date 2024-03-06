import Card from "../../component/Common/Card";

const Featured = () => {
  return (
    <div className="container mx-auto mt-6">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 mx-2 my-10">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((data, index) => {
          return <Card key={index} />;
        })}
      </div>
    </div>
  );
};

export default Featured;
