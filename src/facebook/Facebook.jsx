import React from "react";
import FB_navbar from "./FB_navbar";
import FB_sidebarLeft from "./FB_sidebarLeft";
import FB_story from "./FB_story";
import FB_newStatus from "./FB_newStatus";
import FB_sidebarRight from "./FB_sidebarRight";

const Facebook = () => {
  return (
    <div className="bg-gray-100 w-auto flex flex-col " id="main screen">
      <FB_navbar />
      <div className="flex flex-row h-auto w-full bg-gray-100" id="screen">
        <FB_sidebarLeft />
        <div
          className="bg-gray-100 w-[37%] ml-4 flex flex-col rounded-lg mt-20"
          id="feed"
        >
          <FB_story />
          <FB_newStatus />
          <div className="bg-white shadow-md h-32 w-auto rounded-lg mt-4 border"></div>
          <div className="bg-white shadow-md h-32 w-auto rounded-lg mt-4 border"></div>
          <div className="bg-white shadow-md h-32 w-auto rounded-lg mt-4 border"></div>
        </div>
        <FB_sidebarRight />
      </div>
    </div>
  );
};

export default Facebook;
