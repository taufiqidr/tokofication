import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const TopBar2 = () => {
  const path = useParams();
  const route = path["*"].split("/")[0];
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  console.log();
  return (
    <div
      className={`sticky top-0 bg-gray-800 flex flex-row justify-start items-center border-b border-gray-700 h-12 sm:h-16`}
    >
      <div className=" flex flex-row">
        <span
          className="dark:text-white text-black text-sm sm:text-3xl mx-3 my-auto hover:text-blue-500 cursor-pointer"
          onClick={back}
        >
          <FaArrowLeft />
        </span>
        <span className="dark:text-white text-black text-lg sm:text-3xl font-semibold my-auto">
          {path.id
            ? `Edit ${route}`
            : path["*"].split("/")[1] === "new"
            ? `New ${route}`
            : `Manage ${path["*"]}`}
        </span>
      </div>
    </div>
  );
};

export default TopBar2;
