import React from "react";
import { FiBell } from "react-icons/fi";
import logo from "../assets/atlassian2.jpg";
import { SlArrowDown } from "react-icons/sl";
import { PiSuitcase } from "react-icons/pi";
import { FaRegMessage } from "react-icons/fa6";
import { PiHandCoins } from "react-icons/pi";

const Header = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <div className="bg-gray-200 ps-5 pe-5 pt-2 pb-3 ms-5">
          <div className="text-orange-500 font-bold text-lg">Logo</div>
        </div>
      </div>
      <div className="flex space-x-4 items-center bg-white border rounded-full px-4 py-2 shadow-sm">
        <button className="flex items-center space-x-1 text-white bg-red-500 px-4 py-2 rounded-full">
        <PiSuitcase />
          <span>Jobs</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-500">
        <FaRegMessage />
          <span>Messages</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-500">
        <PiHandCoins />

          <span>Payments</span>
        </button>
      </div>
      <div className="flex space-x-1 items-center">
        <div className="text-2xl">
        <FiBell />
        </div>
        <div className="p-2">
          <img src={logo} alt="Company Logo" className="w-7 h-7 rounded-full" />
        </div>
        <div className="text-sm">
         <SlArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
