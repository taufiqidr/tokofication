import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
