import React from "react";
import Image from "next/image";
import { BsFillSendFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdAccessTime } from "react-icons/md";

const page = () => {
  return (
    <div className="mb-96">
      <div className="w-full">
        <Image src="/test.svg" width={100000} height={1000} alt="" />
      </div>
      <div className="flex justify-center">
        <div className="w-full lg:w-2/3">
          <div className="">
            <p>Map goes here</p>
          </div>
          <div className="p-5">
            <p className="text-center text-3xl text-main font-bold mb-14">
              Let Start A Conversation
            </p>
            <div className="lg:flex block ">
              <div className=" w-full lg:w-1/2 pt-5">
                <h1 className="text-main text-2xl font-semibold pb-5 ">
                  Information
                </h1>
                <p className="text-sm font-extralight text-main">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  natus officia deserunt soluta itaque quis repellendus sit a.
                  Tempore, modi sequi? Quo magnam ducimus nesciunt
                  exercitationem sequi corporis et quisquam.
                </p>
                <div className="">
                  <div className="flex gap-2 items-center text-sm text-main my-2">
                    <div>
                      <FaLocationDot />
                    </div>
                    <div>location</div>
                  </div>

                  <div className="flex gap-2 items-center text-sm text-main my-2">
                    <div>
                      <FaPhoneAlt />
                    </div>
                    <div>Call us: 0540000098 </div>
                  </div>

                  <div className="flex gap-2 items-center text-sm text-main my-2">
                    <div>
                      <MdAccessTime />
                    </div>
                    <div>Mon-Fri</div>
                  </div>

                  <div className="flex gap-2 items-center text-sm text-main my-2">
                    <div>
                      <MdEmail />
                    </div>
                    <div>contact@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className=" p-3 lg:w-2/3 w-full">
                <h1 className="text-main text-2xl font-semibold pb-5 ">
                  Contact Form
                </h1>
                <form>
                  <div className=" ">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered w-full max-w-lg"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="input input-bordered w-full max-w-lg my-2"
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      className="input input-bordered w-full max-w-lg"
                    />
                    <textarea
                      placeholder="Enter message"
                      className="textarea textarea-bordered textarea-lg w-full max-w-lg my-2"
                    ></textarea>
                    <div className="">
                      <button className="btn  md:btn-wide bg-sub text-white rounded-full hover:bg-sub">
                        <span className="">
                          <BsFillSendFill />
                        </span>
                        submit message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
