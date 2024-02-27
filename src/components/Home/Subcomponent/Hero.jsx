import React from "react";
import "./Hero.css"
import NavBar from "../../../globalSubComponents/NavBar";
import sofa from "../assets/sofa.png"

const Hero = () => {
  return (
    <div className="md:h-[35rem] h-auto w-auto bg-[#3B5D50] flex md:flex-row flex-col items-center justify-between">
      <div className="flex flex-col items-start justify-between md:px-[5rem] px-[2rem]">
        <div className="py-[1rem]">
          <h1 className="text-white font-sans font-bold md:text-5xl text-3xl text-start">
            Modern Interior <br /> Design Studio
          </h1>
        </div>
        <div className="py-[0.5rem] ">
          <p className="text-gray-400 font-sans text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Ea, ab.sit  amet consectetur adipisicing
            elit. Ea, ab.
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-start justify-between gap-2 py-[1rem] ">
          <div className="px-[1.8rem] py-[0.8rem]  bg-[#F9BF29] md:rounded-full rounded-3xl text-white border-2 font-sans">
            <button>Shop now</button>
          </div>
          <div className="px-[1rem] py-[0.8rem] bg-transparent border-2 md:rounded-full rounded-3xl text-white font-sans">
            <button>Shop explore</button>
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
