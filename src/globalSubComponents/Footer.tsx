// Dependencies
import { Divider, Image, Button, Listbox, ListboxItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

// Local Files
import "./Footer.css";
import logo from "../globalAssets/logo.svg";

const contactInfo = [
  {
    name: "Phone",
    value: "+1 (845) 687-3270",
    icon: <FaPhone />,
  },
  {
    name: "Email",
    value: "support@laundry.com",
    icon: <MdEmail />,
  },
  {
    name: "Address",
    value: "Unit-544, McCabe Street, Port Charlotte, Florida, USA",
    icon: <IoLocation />,
  },
];

const footerLinks = [
  {
    type: "Navigation",
    data: [
      { key: "home", value: "Home", link: "Home", state: {} },
      { key: "services", value: "Services", link: "Services", state: {} },
      { key: "about", value: "About", link: "About", state: {} },
      { key: "contact", value: "Contact", link: "Contact", state: {} },
      { key: "pricing", value: "Pricing", link: "Pricing", state: {} },
    ],
  },
  {
    type: "Quick Links",
    data: [
      { key: "laundry", value: "Laundry", link: "Services/Individual", state: { id: 0 } },
      { key: "dry cleaning", value: "Dry Cleaning", link: "Services/Individual", state: { id: 1 } },
      { key: "carpet cleaning", value: "Carpet Cleaning", link: "Services/Individual", state: { id: 2 } },
      { key: "webanalytics", value: "Drying", link: "Services/Individual", state: { id: 3 } },
      { key: "graphicdesign", value: "Fabric Maintainance", link: "Services/Individual", state: { id: 4 } },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[6rem] gap-[2rem] text-white footer">
      <div className="flex gap-[4rem] upperFooter">
        <div className="max-w-[20rem] flex flex-col gap-[2rem] companySection">
          <Image width={150} src={logo} alt="logo" className="bg-white p-[1rem]" />

          <Link to="/Privacy" className="text-blue-400">
            Privacy & Policy
          </Link>
          <div className="flex text-[1.8rem] gap-[1rem]">
            <a target="_blank" rel="noreferrer">
              <SiFacebook className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
            <a target="_blank" rel="noreferrer">
              <FaSquareXTwitter className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
            <a target="_blank" rel="noreferrer">
              <TbBrandYoutubeFilled className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
            <a target="_blank" rel="noreferrer">
              <AiFillInstagram className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
            <a target="_blank" rel="noreferrer">
              <FaPinterest className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[1.2rem]">
          <div className="flex gap-[2rem] w-full justify-between contactInfo">
            {contactInfo.map((data, index) => (
              <div key={index} className="flex items-center  gap-[1rem]">
                <Button isIconOnly variant="solid" radius="full" className="w-[3rem] h-[3rem] text-[1.5rem]">
                  {data.icon}
                </Button>
                <div className="font-['poppins']">
                  <h1 className="text-[#F5A524] font-bold text-[1.2rem]">{data.name}</h1>
                  <p className="text-sm max-w-[15rem]">{data.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[100%] upperDivider">
            <Divider className="dark" />
            <Divider className="dark" />
          </div>

          <div className="flex justify-between w-full footerLinks">
            {footerLinks.map((ele, index) => (
              <div key={index} className="flex flex-col gap-[1rem]">
                <p className="font-['poppins'] text-[#F5A524] font-bold text-[1.1rem]">{ele.type}</p>
                <Listbox items={ele.data} aria-label="navigation" className="dark" variant="light">
                  {(item) => (
                    <ListboxItem key={item.key} className="px-[0]" textValue={item.key}>
                      <Link to={`../${item.link}`} state={item.state}>
                        {item.value}
                      </Link>
                    </ListboxItem>
                  )}
                </Listbox>
              </div>
            ))}

            <div className="flex flex-col gap-[1rem] max-w-[13rem]">
              <p className="font-['poppins'] text-[#F5A524] font-bold text-[1.1rem]">Contact Hours</p>
              <p className="text-justify text-sm">
                Feel free to reach out to us during our contact hours for all your laundry needs. We're here to help you
                24*7.
              </p>
              <ul className="text-sm">
                <li>Mon - Fri : 09:00 - 18:00 (GMT)</li>
                <li>Sat: 10:00 - 16:00 (GMT)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <Divider className="dark" />
        <Divider className="dark" />
        <Divider className="dark" />
      </div>

      <p>© 2023 Laundry • All Rights Reserved</p>
    </div>
  );
};

export default Footer;
