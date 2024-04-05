import Carousel from "../../component/Common/Carousel";
import Featured from "./featured";
import HeroSection from "./hero";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Carousel />
      <Featured />
    </div>
  );
};

export default Home;
