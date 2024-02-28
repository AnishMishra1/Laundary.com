// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import Hero from "./Subcomponent/Hero";
import WhyChoseus from "./Subcomponent/WhyChoseus";
import WhoWeare from "./Subcomponent/WhoWeare";
import ProductDemo from "./Subcomponent/ProductDemo";
import Customer from "./Subcomponent/Customer";
import Welcome from "./Subcomponent/Welcome";
import Booking from "./Subcomponent/Booking";

import FeaturedRecepie from "./Subcomponent/FeaturedRecepie";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  return (
    <div>
      <Hero />
      <WhyChoseus />
      <Customer />
      <Welcome />
      <Booking />
      <FeaturedRecepie />
      <WhoWeare />
    </div>
  );
};

export default Home;
