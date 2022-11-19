import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../../../components/TopBar";

const UserNew = () => {
  return (
    <div className="max-w-full">
      <TopBar child={true} title={"New User"} path={"user"} />
      <div className="ml-11 mr-5 mt-5">
        <div>
          <form className="">
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="balance"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Balance
              </label>
              <input
                type="text"
                id="balance"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            {/* radio */}
            <div className="flex flex-row">
              <div className="mr-6">
                <label
                  htmlFor="merchant"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Merchant
                </label>
                <div className="flex items-center mb-4">
                  <input
                    id="merchant-true"
                    type="radio"
                    value=""
                    name="merchant"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="merchant-true"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="merchant-false"
                    type="radio"
                    value=""
                    name="merchant"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="merchant-false"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="role"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Role
                </label>
                <div className="flex items-center mb-4">
                  <input
                    id="role-true"
                    type="radio"
                    value=""
                    name="role"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="role-true"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Admin
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="role-false"
                    type="radio"
                    value=""
                    name="role"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="role-false"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    User
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <Link to={"/user"}>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserNew;
