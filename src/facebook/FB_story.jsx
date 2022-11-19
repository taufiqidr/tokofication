import React from "react";
import { FaBookOpen, FaFilm } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
const FB_story = () => {
  return (
    <div
      className="h-72 w-auto  flex flex-col rounded-lg shadow-md border"
      id="story"
    >
      <div
        className="bg-white h-[21%] w-auto rounded-t-lg flex flex-row justify-center items-center text-blue-500 text-md font-semibold"
        id="story tab"
      >
        <div className=" h-[100%] w-[48%] border-b-4 border-b-blue-500 flex justify-center items-center flex-row gap-1">
          <FaBookOpen />
          <span>Stories</span>
        </div>
        <div className=" h-[100%] w-[48%] text-slate-700 flex justify-center items-center flex-row gap-1">
          <FaFilm />
          <span>Reels</span>
        </div>
      </div>
      <div
        className="bg-white h-[79%] w-auto border-t rounded-b-lg flex flex-row overflow-x-hidden"
        id="stories"
      >
        <div
          className=" bg-white rounded-lg shadow-md h-[90%] w-3/12 my-auto ml-4 border"
          id="new story"
        >
          <div className=" bg-white rounded-lg shadow-md h-full w-full flex flex-col">
            <div className="w-auto h-3/4 rounded-t-lg bg-slate-500"></div>
            <div className="mt-auto mb-3 text-black text-center text-sm font-semibold">
              <span>Create story</span>
            </div>
          </div>
          <div className="relative bottom-20 mt-2 bg-white mx-auto h-11 w-11 rounded-full flex items-center justify-center ">
            <div className="bg-blue-500 text-white  border h-9 w-9 rounded-full flex items-center justify-center  text-2xl ">
              <BsPlus />
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-lg shadow-md h-[90%] w-3/12 my-auto ml-4 border"></div>
        <div className=" bg-white rounded-lg shadow-md h-[90%] w-3/12 my-auto ml-4 border"></div>
      </div>
    </div>
  );
};

export default FB_story;
