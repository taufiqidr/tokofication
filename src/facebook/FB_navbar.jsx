import React from "react";
import {
  FaFacebook,
  FaGamepad,
  FaHome,
  FaShoppingBag,
  FaUser,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

import { BsBellFill, BsGrid3X3GapFill, BsMessenger } from "react-icons/bs";
const FB_navbar = () => {
  return (
    <div
      className="bg-white h-[3.6rem] w-full flex flex-row shadow-lg border fixed z-50"
      id="nav bar"
    >
      <div className=" h-auto w-80 ml-3 flex flex-row" id="brand nav">
        <div className="bg-white h-12 w-12 rounded-full my-auto flex items-center justify-center text-blue-500 text-4xl">
          <FaFacebook />
        </div>
        <input
          type={"text"}
          className="h-10 w-80 rounded-l-full rounded-r-full my-auto bg-gray-100 text-center"
          placeholder="Search Facebook"
        ></input>
      </div>
      <div
        className="h-auto w-[40%] ml-20 text-2xl flex flex-row"
        id="main nav"
      >
        <div className=" h-[100%] w-[20%] border-b-4 border-b-blue-500 flex justify-center items-center flex-row gap-1 text-blue-500">
          <FaHome />
        </div>
        <div className=" h-[100%] w-[20%]  flex justify-center items-center flex-row gap-1 text-slate-500">
          <FaVideo />
        </div>
        <div className=" h-[100%] w-[20%]  flex justify-center items-center flex-row gap-1 text-slate-500">
          <FaShoppingBag />
        </div>
        <div className=" h-[100%] w-[20%]  flex justify-center items-center flex-row gap-1 text-slate-500">
          <FaUsers />
        </div>
        <div className=" h-[100%] w-[20%]  flex justify-center items-center flex-row gap-1 text-slate-500">
          <FaGamepad />
        </div>
      </div>
      <div
        className="h-auto w-72 ml-auto mr-3 flex flex-row justify-end gap-3 "
        id="user menu"
      >
        <div className="border h-10 w-10 rounded-full my-auto flex items-center justify-center text-black text-2xl bg-gray-100">
          <BsGrid3X3GapFill />
        </div>
        <div className="border  h-10 w-10 rounded-full my-auto flex items-center justify-center text-black text-2xl bg-gray-100">
          <BsMessenger />
        </div>
        <div className="border  h-10 w-10 rounded-full my-auto flex items-center justify-center text-black text-2xl bg-gray-100">
          <BsBellFill />
        </div>
        <div className="border  h-10 w-10 rounded-full my-auto flex items-center justify-center text-black text-2xl ">
          <FaUser />
        </div>
      </div>
    </div>
  );
};

export default FB_navbar;
