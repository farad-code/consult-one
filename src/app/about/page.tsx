import React from "react";
import Image from "next/image";
import Menu from "@/components/About/Menu";
import BestPage from "@/components/About/BestPage";
import Team from "@/components/About/Team";

const About = () => {
  return (
    <div className="mb-96">
      <div className="w-full">
        <Image src="/about.svg" width={100000} height={1000} alt="" />
      </div>
      <div className="flex justify-center p-5">
        <div className="w-full lg:w-2/3 pt-10 md:pt-20 md:flex gap-10 ">
          <div className="flex justify-center border-2 md:w-2/3">
            <Image src="/use1.jpg" width={500} height={1000} alt="" />
          </div>
          <div className="flex justify-center w-full md:w-3/7">
            <div className=" p-2 mt-10 w-3/7">
              <div className="text-left">
                <p className="text-sub text-md text-lg font-semibold mb-2 ">
                  Simply Know About
                </p>
                <h1 className="text-main font-semibold text-lg lg:text-3xl md:text-2xl">
                  We Help Organizations To
                </h1>
                <h1 className="text-main text-lg lg:text-3xl md:text-2xl font-semibold">
                  Make Ultimate Businesses
                </h1>
                <h1 className="text-main text-lg lg:text-3xl md:text-2xl font-semibold">
                  Grow Success
                </h1>
              </div>
              <div className="text-main">
                <div className="flex gap-5 my-1  mt-5 items-center text-md">
                  <div>
                    <Image
                      src="/about-menu.svg"
                      width={20}
                      height={1000}
                      alt=""
                    />
                  </div>
                  <p>Medical Advantage plan</p>
                </div>
                <div className="flex gap-5 my-1  items-center text-md">
                  <div>
                    <Image
                      src="/about-menu.svg"
                      width={20}
                      height={1000}
                      alt=""
                    />
                  </div>
                  <p>Medical Advantage plan</p>
                </div>
                <div className="flex gap-5 my-1 items-center text-md">
                  <div>
                    <Image
                      src="/about-menu.svg"
                      width={20}
                      height={1000}
                      alt=""
                    />
                  </div>
                  <p>Medical Advantage plan</p>
                </div>
                <div className="flex gap-5 my-1 items-center">
                  <div>
                    <Image
                      src="/about-menu.svg"
                      width={20}
                      height={1000}
                      alt=""
                    />
                  </div>
                  <p>Medical Advantage plan</p>
                </div>
                <div className="text-sm font-extralight mt-3">
                  <p>We successfully cope with tasks of varying complexity</p>
                  <p>provide longevity terms guarantee and regularly </p>
                  <p>
                    master new practice area technology. Our portofolio includes
                    dozen
                  </p>
                </div>
                <button className="btn text-left w-52 mt-5 bg-sub text-white hover:bg-sub">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider divider-start"></div>
      <div className=" flex justify-center">
        <div className="md:w-2/3 w-full grid grid-cols-2 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-14">
          <div className="">
            <Image src="/partner1.svg" width={150} height={1000} alt="" />
          </div>
          <div className="">
            <Image src="/partner1.svg" width={150} height={1000} alt="" />
          </div>
          <div className="">
            <Image src="/partner1.svg" width={150} height={1000} alt="" />
          </div>
          <div className="">
            <Image src="/partner1.svg" width={150} height={1000} alt="" />
          </div>
          <div className="">
            <Image src="/partner1.svg" width={150} height={1000} alt="" />
          </div>
        </div>
      </div>
      <BestPage />
      <Team />
    </div>
  );
};

export default About;
