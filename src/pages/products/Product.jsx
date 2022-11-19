import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ id, name, price, stock, sold }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600">
      <td className="py-4 px-6 text-white">{name}</td>
      <td className="py-4 px-6 text-white">{price}</td>
      <td className="py-4 px-6 text-white">{stock}</td>
      <td className="py-4 px-6 text-white">{sold}</td>
      <td className="py-4 px-6 border-l border-gray-400">
        <span className="hover:text-blue-400 text-white text-xl">
          <Link to={`${id}/edit`}>
            <FaEdit />
          </Link>
        </span>
      </td>
    </tr>
  );
};

export default Product;
