import React from "react";
import { FaUser } from "react-icons/fa";
import { BsCameraVideoFill, BsEmojiSmile, BsImages } from "react-icons/bs";
const FB_newStatus = () => {
  return (
    <div
      className="bg-white h-32 w-auto rounded-lg mt-4 flex flex-col  items-center shadow-md border"
      id="new status"
    >
      <div className="border-b h-3/6 w-11/12 flex flex-row justify-between">
        <div className="border h-10 mr-3 w-10 rounded-full my-auto flex items-center justify-center text-black text-2xl ">
          <FaUser />
        </div>
        <input
          type={"text"}
          className="h-10 w-11/12 rounded-l-full rounded-r-full my-auto  bg-gray-100 text-center"
          placeholder="What's on your mind?"
        ></input>
      </div>
      <div className="w-11/12 h-3/6 flex flex-row justify-between">
        <div className="h-auto w-1/3 flex justify-center items-center flex-row text-slate-500">
          <span className="text-red-500 text-2xl">
            <BsCameraVideoFill />
          </span>
          <span className="font-semibold ml-3">Live Video</span>
        </div>
        <div className="h-auto w-1/3 flex justify-center items-center flex-row text-slate-500">
          <span className="text-red-500 text-2xl">
            <BsImages />
          </span>
          <span className="font-semibold ml-3">Photo/video</span>
        </div>
        <div className="h-auto w-1/3 flex justify-center items-center flex-row text-slate-500">
          <span className="text-yellow-500 text-2xl">
            <BsEmojiSmile />
          </span>
          <span className="font-semibold ml-3">Feeling/activity</span>
        </div>
      </div>
    </div>
  );
};

export default FB_newStatus;
