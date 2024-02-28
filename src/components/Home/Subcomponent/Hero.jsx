import "./Hero.css";
import sofa from "../assets/lau.png";

const Hero = () => {
  return (
    <div className="md:h-[35rem] h-auto w-auto bg-[#3B5D50] flex md:flex-row flex-col items-center justify-evenly">
      <div className="flex flex-col items-start justify-between md:px-[5rem] px-[2rem]">
        <div className="py-[1rem] px-[2rem]">
          <h1 className="text-white font-sans font-bold md:text-5xl text-3xl text-start">
            Dry Cleaning & Laundary Delivery <br />
            Service
          </h1>
        </div>
        <div className="py-[0.5rem] px-[2rem] ">
          <p className="text-gray-400 font-sans text-start">
            We always ensure the quality of Laundary Service. Our fleet team efficient enough to ensure your schedule collection and delivery
          </p>
        </div>
        <div className="flex flex-row  items-start justify-between gap-2 py-[1rem] px-[2rem] ">
          <div className="px-[1.8rem] py-[0.8rem]  bg-[#F9BF29] md:rounded-full rounded-3xl text-white border-2 font-sans">
            <button>Now Book</button>
          </div>
          <div className="px-[1rem] py-[0.8rem] bg-transparent border-2 md:rounded-full rounded-3xl text-white font-sans">
            <button>Explore</button>
          </div>
        </div>
      </div>
      <div className="xl:w-[50rem] md:w-[30rem] md:inline-block hidden ">
        <img src={sofa} alt="" />
      </div>
    </div>
  );
};

export default Hero;
