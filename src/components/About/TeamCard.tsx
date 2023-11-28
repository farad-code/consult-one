import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa6";
const TeamCard = () => {
  return (
    <div className="card  bg-base-100 shadow-sm">
      <figure className=" rounded-bl-6xl">
        <Image src="/teampic.svg" width={900} height={100} alt="" />
      </figure>
      <div className="flex-col p-5 text-start">
        <h2 className="card-title text-main text-lg">Ralph Miles Edwards</h2>
        <p className="text-xs text-sub">Finance Advisor</p>
      </div>
    </div>
  );
};

export default TeamCard;
