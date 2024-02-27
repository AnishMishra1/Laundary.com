import React from "react";

const WhoWeare = () => {
  return (
    <div className="py-[4rem] h-auto ">
      <div className="lg:relative h-auto flex flex-col items-start justify-between px-[2rem]  ">
        {/* image */}
        <div className="h-auto px-[5rem] lg:inline-block hidden lg:absolute ">
          <div className="w-[28rem]  absolute left-[1rem]">
            <img className="rounded-2xl" src="https://themewagon.github.io/furni/images/img-grid-1.jpg" alt="" />
          </div>
          <div className=" w-[10rem] absolute top-[0rem] left-[29rem]">
            <img className="rounded-2xl" src="https://themewagon.github.io/furni/images/img-grid-2.jpg" alt="" />
          </div>
          <div className="  w-[20rem] absolute top-[11rem] left-[20rem] ">
            <img className="rounded-2xl" src="https://themewagon.github.io/furni/images/img-grid-3.jpg" alt="" />
          </div>
        </div>

        {/* content */}

        <div className="flex flex-col justify-between items-start text-[#2F2F2F] lg:absolute lg:left-[45rem] md:px-[2rem] ">
          <div className="py-[1rem]">
            <h1 className="text-3xl font-sans font-semibold">We Help You Make Modern Interior Design</h1>
          </div>
          <div className="py-[0.5rem]">
            <p className="text-gray-600 text-[0.95rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident consectetur sed placeat vitae optio
              est neque temporibus molestias, sunt repellendus!Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident consectetur sed placeat vitae optio est neque temporibus molestias, sunt repellendus!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-600 text-[0.95rem] py-[1rem] gap-x-[2rem]">
            <div>
              <ul className="list-disc">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
            </div>
          </div>
          <div className="py-[1rem]">
            <button className="py-[0.8rem] px-[2rem] bg-black text-white font-sans rounded-full">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeare;
