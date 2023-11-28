import React from "react";
import Image from "next/image";


const Card = () => {
  return (
    <div className="bg-base-100 shadow-md ">
      <figure className="">
        <Image src="cardPic.svg" width={1000} height={1000} alt=""/>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm text-main font-semibold">
          Marketing Strategy
        </h2>
        <p className="text-sm">If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-start">
        <div className=" bg-read-more rounded-md text-xs p-2 mt-2">Read More</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
