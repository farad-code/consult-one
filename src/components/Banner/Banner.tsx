import React from "react";
import {
  MdOutlineLocationOn,
  MdOutlineEmail,
  MdAccessTime,
} from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
const Banner = () => {
  return (
    <div className="flex justify-center bg-head p-4 fixed w-full z-20">
      <div className="hidden w-3/7 lg:flex flex-col items-center md:flex-row md:justify-between text-xs">
        <div className="md:flex gap-5 md:text-left flex-wrap">
          <div className="flex items-center gap-2 my-1">
            <div className="text-gray-400">
              <FiPhoneCall style={{ fontSize: "1rem" }} />
            </div>
            <p className="text-white">+23359516509</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-gray-400">
              <MdOutlineLocationOn style={{ fontSize: "1rem" }} />
            </div>
            <p className="text-white">256 Avenue, Mark Street, New York</p>
          </div>
        </div>

        <div className="md:flex gap-5 md:text-left  flex-wrap">
          <div className="flex items-center gap-2 my-1">
            <div className="text-gray-400">
              <MdOutlineEmail style={{ fontSize: "1rem" }} />
            </div>
            <p className="text-white">info@apexaconsulting.com</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-gray-400">
              <MdAccessTime style={{ fontSize: "1rem" }} />
            </div>
            <p className="text-white">Mon-Fri: 10:00 - 5:00pm</p>
          </div>
        </div>
      </div>

      <ul className="text-white lg:hidden text-xs">
        <li >
          <div className="flex items-center gap-2 my-1">
            <div className="text-gray-400">
              <FiPhoneCall style={{ fontSize: "1rem" }} />
            </div>
            <p className="text-white">+23359516509</p>
          </div>
        </li>
        <li >
        <div className="flex items-center gap-2">
            <div className="text-gray-400">
              <MdOutlineLocationOn style={{ fontSize: "1rem" }} />
            </div>
            <p className="text-white">256 Avenue, Mark Street, New York City</p>
          </div>
        </li>
        <li >
        <div className="flex items-center gap-2 my-1">
            <div className="text-gray-400">
              <MdOutlineEmail style={{ fontSize: "1rem" }} />
            </div>
            <p className="text-white">info@apexaconsulting.com</p>
          </div>
        </li>
        <li>
        <div className="flex items-center gap-2">
            <div className="text-gray-400">
              <MdAccessTime style={{ fontSize: "1rem" }} />
            </div>
            <p className="text-white">Mon-Fri: 10:00 - 5:00pm</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Banner;
