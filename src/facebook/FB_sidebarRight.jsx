import React from "react";
import { FaUser, FaUsers } from "react-icons/fa";

import {
  BsChevronDown,
  BsClockHistory,
  BsGift,
  BsGiftFill,
  BsPeopleFill,
  BsPlayBtnFill,
  BsShop,
} from "react-icons/bs";
const FB_sidebarRight = () => {
  return (
    <div
      className=" ml-auto w-auto flex flex-col items-end mt-20 mr-3"
      id="right sidebar"
    >
      <div className=" h-auto w-[20%]  flex flex-col fixed gap-2 border-b border-t">
        <div className=" text-slate-500 text-xl font-semibold">Birthdays</div>
        <div className="flex flex-row text-black">
          <span className="text-blue-500 mr-4 text-2xl">
            <BsGiftFill />
          </span>
          <span>
            <span className="font-semibold">Taufiqurrahman Idrus</span> and{" "}
            <span className="font-semibold">7 Others</span> Have birthdays
            today.
          </span>
        </div>
      </div>
    </div>
  );
};

export default FB_sidebarRight;
