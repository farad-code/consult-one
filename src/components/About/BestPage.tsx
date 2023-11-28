import React from "react";
import Image from "next/image";

const BestPage = () => {
  return (
    <div className="bg-main flex-row  md:flex justify-center p-10 md:p-0">
      <div className="w-full md:w-2/3  md:flex  block gap-16 py-16">
        <div className="mb-5 md:mb-0">
          <p className="text-sub text-md font-semibold">Why We Are The Best</p>
          <div className="text-3xl text-white">
            <p>Digital Solutions For</p>
            <p>Your Online Business</p>
          </div>
          <div className="text-sm font-extralight mt-3 text-white">
            <p>We successfully cope with tasks of varying complexity</p>
            <p>provide longevity terms guarantee and regularly </p>
            <p>master new practice area technology</p>
          </div>
        </div>

        <div className=" ">
          <div className="flex gap-5 mb-5">
            <div>
              <Image src="/logo1.svg" width={60} height={100} alt="" />
            </div>
            <div className="text-white ">
              <h2 className="lg:text-2xl text-md ">Business Solution</h2>
              <p className="text-xs font-extralight">
                We successfully cope with tasks of varying
              </p>
              <p className="text-xs font-extralight">
                complexity provide longevity terms
              </p>
              <p className="text-xs font-extralight">guarantee and regularly</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div>
              <Image src="/logo1.svg" width={60} height={100} alt="" />
            </div>
            <div className="text-white ">
              <h2 className="lg:text-2xl text-md">Market Analysis</h2>
              <p className="text-xs font-extralight">
                We successfully cope with tasks of varying
              </p>
              <p className="text-xs font-extralight">
                complexity provide longevity terms
              </p>
              <p className="text-xs font-extralight">guarantee and regularly</p>
            </div>
          </div>
        </div>

        <div className="  ">
          <div className="flex gap-5 mb-4">
            <div>
              <Image src="/logo1.svg" width={60} height={100} alt="" />
            </div>
            <div className="text-white ">
              <h2 className="lg:text-2xl text-md">Business Solution</h2>
              <p className="text-xs font-extralight">
                We successfully cope with tasks of varying
              </p>
              <p className="text-xs font-extralight">
                complexity provide longevity terms
              </p>
              <p className="text-xs font-extralight">guarantee and regularly</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div>
              <Image src="/logo1.svg" width={60} height={100} alt="" />
            </div>
            <div className="text-white ">
              <h2 className="lg:text-2xl text-md ">Business Solution</h2>
              <p className="text-xs font-extralight">
                We successfully cope with tasks of varying
              </p>
              <p className="text-xs font-extralight">
                complexity provide longevity terms
              </p>
              <p className="text-xs font-extralight">guarantee and regularly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPage;
