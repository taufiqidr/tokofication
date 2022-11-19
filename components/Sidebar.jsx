import { Link } from "react-router-dom";
import React, { useState } from "react";

import {
  FaChartPie,
  FaShoppingBag,
  FaShoppingCart,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";

const Sidebar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div
      className={`sm:w-64 w-14 h-auto min-h-screen top-0 sticky border border-gray-700 bg-gray-50 dark:bg-gray-800`}
      aria-label="Sidebar"
    >
      <section className="py-4 px-3 hidden sm:block" aria-label="desktop">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="text-2xl text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white">
                <FaChartPie />
              </span>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/user"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="text-2xl text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white">
                <FaUser />
              </span>
              <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="text-2xl text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white">
                <FaShoppingCart />
              </span>
              <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
            </Link>
          </li>
          <li>
            <Link
              to="/category"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="text-2xl text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white">
                <FaShoppingBag />
              </span>
              <span className="flex-1 ml-3 whitespace-nowrap">Category</span>
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="text-2xl text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white">
                <FaSignOutAlt />
              </span>
              <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
            </Link>
          </li>
        </ul>
      </section>
      <section className="flex justify-center sm:hidden " aria-label="mobile">
        <ul className="mt-10 h-screen">
          <li className="mb-3">
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="text-2xl text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white">
                <FaChartPie />
              </span>
            </Link>
          </li>
          <li className="my-3">
            <Link
              to="/user"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="text-2xl text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white">
                <FaUser />
              </span>
            </Link>
          </li>
          <li className="my-3">
            <Link
              to="/product"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="text-2xl text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white">
                <FaShoppingCart />
              </span>
            </Link>
          </li>
          <li className="my-3">
            <Link
              to="/category"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="text-2xl text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white">
                <FaShoppingBag />
              </span>
            </Link>
          </li>
          <li className="my-3">
            <Link
              to="/login"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="text-2xl text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white">
                <FaSignOutAlt />
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
