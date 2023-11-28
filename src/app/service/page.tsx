import React from "react";
import Image from "next/image";
import Card from "@/components/Service/Card";

const Service = () => {
  return (
    <div className="mb-96">
     <div className="w-full"> 
      <Image src="/test.svg" width={100000} height={1000} alt="" />
     </div>
      <div className="flex justify-center p-5">
        <div className="w-full lg:w-2/3 pt-20">
          <div className="text-center">
            <p className="text-sub text-md text-lg font-semibold">
              What we Offer
            </p>
            <h1 className="text-main font-semibold text-lg lg:text-3xl md:text-2xl">
              We Offer An Effective Wide
            </h1>
            <h1 className="text-main text-lg lg:text-3xl md:text-2xl font-semibold">
              Area Business Solution
            </h1>
          </div>
          <div className="mt-10  w-full   mb-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>

              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
              <div>
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
