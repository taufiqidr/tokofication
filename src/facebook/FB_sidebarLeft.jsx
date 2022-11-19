import React from "react";
import { FaUser, FaUsers } from "react-icons/fa";

import {
  BsChevronDown,
  BsClockHistory,
  BsPeopleFill,
  BsPlayBtnFill,
  BsShop,
} from "react-icons/bs";
const FB_sidebarLeft = () => {
  return (
    <div className="w-3/12 ml-3 mr-14 flex flex-col mt-20 " id="left sidebar">
      <div className=" h-auto w-[20%] flex flex-col fixed gap-2 ">
        <div className=" flex flex-row text-black text-2xl ">
          <div className="border h-10 mr-3 w-10 rounded-full flex flex-row justify-center text-black text-lg ">
            <span className="my-auto  text-blue-500">
              <FaUser />
            </span>
          </div>
          <div>
            <span className="text-base font-semibold">
              Taufiqurrahman Idrus
            </span>
          </div>
        </div>
        <div className=" flex flex-row text-black text-2xl ">
          <div className="border h-10 mr-3 w-10 rounded-full flex flex-row justify-center text-black text-lg ">
            <span className="my-auto  text-blue-500">
              <BsPeopleFill />
            </span>
          </div>
          <div>
            <span className="text-base font-semibold">Friends</span>
          </div>
        </div>
        <div className=" flex flex-row text-black text-2xl ">
          <div className="border h-10 mr-3 w-10 rounded-full flex flex-row justify-center text-black text-lg ">
            <span className="my-auto  text-blue-500">
              <FaUsers />
            </span>
          </div>
          <div>
            <span className="text-base font-semibold">Groups</span>
          </div>
        </div>
        <div className=" flex flex-row text-black text-2xl ">
          <div className="border h-10 mr-3 w-10 rounded-full flex flex-row justify-center text-black text-lg ">
            <span className="my-auto  text-blue-500">
              <BsShop />
            </span>
          </div>
          <div>
            <span className="text-base font-semibold">Marketplace</span>
          </div>
        </div>
        <div className=" flex flex-row text-black text-2xl ">
          <div className="border h-10 mr-3 w-10 rounded-full flex flex-row justify-center text-black text-lg ">
            <span className="my-auto  text-blue-500">
              <BsPlayBtnFill />
            </span>
          </div>
          <div>
            <span className="text-base font-semibold">Watch</span>
          </div>
        </div>
        <div className=" flex flex-row text-black text-2xl ">
          <div className="border h-10 mr-3 w-10 rounded-full flex flex-row justify-center text-black text-lg ">
            <span className="my-auto  text-blue-500">
              <BsClockHistory />
            </span>
          </div>
          <div>
            <span className="text-base font-semibold">Memories</span>
          </div>
        </div>
        <div className=" flex flex-row text-black text-2xl border-b border-slate-300">
          <div className="border h-10 mr-3 w-10 rounded-full flex flex-row justify-center text-black text-lg ">
            <span className="my-auto text-blue-500">
              <BsChevronDown />
            </span>
          </div>
          <div>
            <span className="text-base font-semibold">See More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FB_sidebarLeft;
