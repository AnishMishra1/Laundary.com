import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuShoppingBag } from "react-icons/lu";
import { MdAssignmentReturn } from "react-icons/md";
import { GrSupport } from "react-icons/gr";

const content = [
    {
        icon:LiaShippingFastSolid,
        title:"Fast & Free Shipping",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio provident, similique numquam ipsa neque rem?",
    },
    {
        icon: LuShoppingBag,
        title:"Easy to Shop",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio provident, similique numquam ipsa neque rem?",
    },
    {
        icon: GrSupport,
        title:"24/7 Support",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio provident, similique numquam ipsa neque rem?",
    },
    {
        icon:MdAssignmentReturn,
        title:"Hassle Free Returns",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio provident, similique numquam ipsa neque rem?",
    },
]

const WhyChoseus = () => {
  return (
    <div className="flex flex-row items-start justify-between h-auto bg-[#EFF2F1] py-[3rem]  ">
      <div className="flex flex-col items-start justify-between md:px-[5rem] px-[2rem] text-[#2F2F2F]">
        <div className="py-[1rem]">
          <h1 className="text-4xl font-sans font-semibold">Why Choose Us</h1>
        </div>
        <div>
          <p className="text-gray-600 font-sans ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio provident, similique numquam ipsa neque
            rem?
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 flex flex-col gap-x-[2rem] gap-y-[3rem] py-[2rem]">
          {content.map((e) => (
            <div className="flex flex-col items-start justify-between">
              <div className="py-[0.5rem]">{<e.icon className="text-[3rem]" />}</div>
              <div>
                <h3 className="font-sans font-bold">{e.title}</h3>
              </div>
              <div>
                <p className="text-gray-600 text-[0.95rem]">{e.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* {image} */}
      <div className="lg:inline-block hidden px-[5rem] py-[2rem] ">
        <img className="rounded-xl md:w-[70rem]" src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg" alt="" />
      </div>
    </div>
  );
};

export default WhyChoseus;
