// Dependencies
import { RadioGroup, Radio, Input, Select, SelectItem, Button, Textarea } from "@nextui-org/react";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { useState } from "react";
import { IoPeople, IoSend } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const flightClass = [
  {
    name: "Economy",
    value: "economy",
  },
  {
    name: "Premium Economy",
    value: "premium-economy",
  },
  {
    name: "Business Class",
    value: "business-class",
  },
  {
    name: "First Class",
    value: "first-class",
  },
];

const Booking = () => {
  const [roundTrip, setRoundTrip] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center py-[5rem] bg-[#3B5D50] gap-[2rem]">
      <div className="flex flex-col sm:gap-[0.5rem]">
        <h1 className="text-4xl sm:text-5xl font-bold  text-white text-center font-['Kanit']">
          MAKE <span className="text-black">A BOOKING</span>
        </h1>
        <h2 className="text-center font-bold  text-white">
          We will collect, clean and deliver your laundary directly to your door
        </h2>
      </div>
      <div className="w-[100%] sm:w-[80%] p-[3rem] bg-white sm:rounded-xl md:drop-shadow-xl border-2 flex flex-col gap-[2rem]">
        <RadioGroup
          orientation="horizontal"
          defaultValue="one-way"
          classNames={{
            wrapper: "gap-[2rem]",
          }}
          onChange={() => setRoundTrip((prev) => !prev)}
        ></RadioGroup>
        <form action="" className="flex flex-col gap-[1rem]">
          <p className="text-default-500">Departure</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
            <Input type="text" label="Name" placeholder="Your Name" startContent={<CgProfile />} />
            <Input type="email" label="Email" placeholder="Your Email" startContent={<MdEmail />} />
            <Input type="phone" label="Phone" placeholder="Your Phone" startContent={<FaPhone />} />
          </div>
          <div>
            <Textarea placeholder="Your Message" />
          </div>
          <div className="flex flex-col gap-[2rem] items-center justify-center">
            <RadioGroup
              orientation="horizontal"
              defaultValue="one-way"
              classNames={{
                wrapper: "gap-[2rem]",
              }}
              onChange={() => setRoundTrip((prev) => !prev)}
            >
              <Radio value="round-trip">Dry Cleaning</Radio>
              <Radio value="one-way">laundary</Radio>
              <Radio value="round-trip">Ironing</Radio>
              <Radio value="one-way">Bedding</Radio>
            </RadioGroup>
            <RadioGroup
              orientation="horizontal"
              defaultValue="one-way"
              classNames={{
                wrapper: "gap-[2rem]",
              }}
              onChange={() => setRoundTrip((prev) => !prev)}
            >
              <Radio value="round-trip">Leather</Radio>
              <Radio value="one-way">Alteration</Radio>
              <Radio value="round-trip">Commercial</Radio>
              <Radio value="one-way">key Cutting & Fab Copying</Radio>
            </RadioGroup>
          </div>
          <Button
            variant="shadow"
            type="submit"
            className="text-white bg-[#3B5D50] self-center mt-[2rem] p-[1.5rem]"
            radius="full"
            endContent={<IoSend className="" />}
          >
            Book Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
