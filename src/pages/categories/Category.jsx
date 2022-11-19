import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = ({ index }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600">
      <td className="py-4 px-6 text-white">Category {index}</td>
      <td className="py-4 px-6 border-l border-gray-400">
        <span className="hover:text-blue-400 text-white text-xl">
          <Link to={`${index}/edit`}>
            <FaEdit />
          </Link>
        </span>
      </td>
    </tr>
  );
};

export default Category;
