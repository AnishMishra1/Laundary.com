import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuShoppingBag } from "react-icons/lu";
import { MdAssignmentReturn } from "react-icons/md";
import { GrSupport } from "react-icons/gr";

const content = [
  {
    icon: LiaShippingFastSolid,
    title: "Drop off",
    des: "We collect the cloths from your Address at free of cost ",
  },
  {
    icon: LuShoppingBag,
    title: "Place Order",
    des: "You can place the order through SMS and Phone number",
  },
  {
    icon: GrSupport,
    title: "Pick Up",
    des: "We picked the order as per your convience or from your given address",
  },
  {
    icon: MdAssignmentReturn,
    title: "Deliver",
    des: "We deliver the your pack cloth in your Address with free of cost",
  },
];

const WhyChoseus = () => {
  return (
    <div className="flex flex-row items-start justify-between h-auto bg-[#EFF2F1] py-[3rem]  ">
      <div className="flex flex-col items-start justify-between md:px-[5rem] px-[2rem] text-[#2F2F2F]">
        <div className="py-[1rem]">
          <h1 className="text-4xl font-sans font-semibold">Easy As One, Two ,Three</h1>
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
        <img
          className="rounded-xl md:w-[70rem]"
          src="https://img.freepik.com/free-photo/medium-shot-smiley-woman-with-apron_23-2148246459.jpg?w=740&t=st=1709044177~exp=1709044777~hmac=fa3f724fce9c385adbc8d65a64ab223b7ee6f8f3f11cebab591e10bfef6deb22"
          alt=""
        />
      </div>
    </div>
  );
};

export default WhyChoseus;
