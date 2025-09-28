import React from "react";

function Courses() {
  return (
    <div className="ml-10">
      <div className=" flex flex-col items-center justify-between text-5xl font-extrabold">
        <div className=" text-red-500">Our Courses</div>
        <div className="font-bold">Programs To Help You Upskill</div>
      </div>
      <div className="">
        <div className="border-1 rounded-lg bg-yellow-300 flex flex-col w-1/6 h-[20vh] px-3 p-2 hover:scale-105 duration-300">
          <div>images</div>
          <div className="flex flex-col items-center justify-center">
            <div>Heading</div>
            <div>Duration</div>
            <div>Pricing</div>
            <div>Eligibility</div>
            <button className="bg-red-400 rounded-lg px-3 py-1 text-indigo-200 hover:scale-105 cursor-pointer">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
