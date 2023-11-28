import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-2/3  ">
        <div className=" w-full  text-center">
          <p className="text-sub text-sm font-semibold p-3 mt-10">Meet Our Team</p>
          <p className="text-2xl text-main font-semibold">
            Business Expertise Is Here
          </p>
          <p className="text-2xl text-main font-semibold">For You Can Trust </p>
        </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 p-5">
       <TeamCard />
       <TeamCard />
       <TeamCard />
       <TeamCard />
       </div>
      </div>
    </div>
  );
};

export default Team;
