import React from "react";

const Welcome = () => {
  return (
    <div className="flex bg-white overflow-hidden py-[4rem]">
      <div className="flex flex-col gap-y-[3rem] items-center px-[2rem] py-[4rem]">
        <div className="flex flex-col items-start justify-between md:px-[5rem] px-[2rem]">
          <div className="py-[1rem] px-[2rem]">
            <h1 className="text-black font-sans font-bold md:text-5xl text-3xl text-start">
              Welcome to our laundary services
            </h1>
          </div>
          <div className="py-[0.5rem] px-[2rem] ">
            <p className="text-gray-400 font-sans text-start">
              We always ensure the quality of our laundary and dry cleaning our fiest team are efficient enough to
              ensure your schedule collection and delivery{" "}
            </p>
          </div>
          <div className="flex flex-row  items-start justify-between gap-2 py-[1rem] px-[2rem] ">
            <div className="px-[1.8rem] py-[0.8rem]  bg-[#3B5D50] md:rounded-full rounded-3xl text-white border-2 font-sans">
              <button>View price list</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:flex  bg-no-repeat bg-center bg-cover w-[90rem] h-auto"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1639580133969-48cbbce72e1f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      ></div>
    </div>
  );
};

export default Welcome;
