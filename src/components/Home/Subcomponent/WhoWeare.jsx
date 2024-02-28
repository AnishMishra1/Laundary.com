import React from "react";

const WhoWeare = () => {
  return (
    <div className="py-[4rem] h-[50rem] bg-[#EFF2F1]">
      <div className="lg:relative h-auto flex flex-col items-start justify-between px-[2rem]  ">
        {/* image */}
        <div className="h-auto px-[5rem] lg:inline-block hidden lg:absolute ">
          <div className="w-[28rem]  absolute left-[1rem]">
            <img
              className="rounded-2xl"
              src="https://images.unsplash.com/photo-1610305401607-8745a10c75dd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className=" w-[10rem] absolute top-[0rem] left-[29rem]">
            <img className="rounded-2xl" src="https://themewagon.github.io/furni/images/img-grid-2.jpg" alt="" />
          </div>
          <div className="  w-[20rem] absolute top-[11rem] left-[20rem] ">
            <img
              className="rounded-2xl"
              src="https://images.unsplash.com/photo-1534889156217-d643df14f14a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>

        {/* content */}

        <div className="flex flex-col justify-between items-start text-[#2F2F2F] lg:absolute lg:left-[45rem] md:px-[2rem] ">
          <div className="py-[1rem]">
            <h1 className="text-3xl font-sans font-semibold">We Make your Laundry Day Effortless </h1>
          </div>
          <div className="py-[0.5rem]">
            <p className="text-gray-600 text-[0.95rem]">
              At our laundry service, we take the hassle out of your laundry routine by providing efficient and reliable
              solutions. Our team of skilled professionals handles your garments with care, ensuring they are cleaned to
              perfection and returned to you in pristine condition. With our convenient pickup and delivery options, you
              can enjoy the convenience of a freshly laundered wardrobe without ever having to leave your home. Let us
              take care of your laundry needs so you can focus on the things that matter most to you.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-600 text-[0.95rem] py-[1rem] gap-x-[2rem] ml-[2rem]">
            <div>
              <ul className="list-disc">
                <li>Laundry Service</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc">
                <li>Dry Cleaning</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc">
                <li>Carpet Cleaning</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc">
                <li>Fabric Care</li>
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
