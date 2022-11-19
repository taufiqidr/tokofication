import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import TopBar2 from "./TopBar2";

const Layout = () => {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="basis-1/12 sm:basis-2/12">
        <Sidebar />
      </div>
      <div className="basis-11/12 sm:basis-10/12 flex flex-col">
        <TopBar2 />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
