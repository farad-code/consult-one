import React from "react";
import Card from "./Card";

const WorkWithUS = () => {
  return (
    <div className="flex justify-center bg-page-layer pb-32">
      <div className="lg:w-2/3 w-full mt-7 p-5">
        <div>
          <p className="text-center text-sub text-5xl font-semibold pb-20">
            Why Work With Us
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default WorkWithUS;
