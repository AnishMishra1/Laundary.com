// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import Hero from "./Subcomponent/Hero";
import WhyChoseus from "./Subcomponent/WhyChoseus";
import WhoWeare from "./Subcomponent/WhoWeare";
import ProductDemo from "./Subcomponent/ProductDemo";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  return (
    <div>
      <Hero />
      <WhyChoseus />
      <WhoWeare />
      <ProductDemo/>
    </div>
  );
};

export default Home;
