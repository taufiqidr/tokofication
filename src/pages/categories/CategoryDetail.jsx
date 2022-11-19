import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "../../../components/TopBar";
import CategoryDeleteModal from "./CategoryDeleteModal";

const CategoryDetail = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="max-w-full">
      <TopBar
        child={true}
        path={"category"}
        title={"Edit Category"}
        btn_text={"Category"}
        edit={true}
        modal={modal}
        setModal={setModal}
      />
      <div className={`${modal ? "flex justify-center" : "ml-11 mr-5 mt-5"} `}>
        <CategoryDeleteModal modal={modal} setModal={setModal} />
        <div className={`${modal ? "hidden" : "block"}`}>
          <form className="">
            <div className="mb-6">
              <label
                htmlFor="category_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Category Name
              </label>
              <input
                type="text"
                id="category_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

            <div className="">
              <Link to={"/category"}>
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

export default CategoryDetail;
