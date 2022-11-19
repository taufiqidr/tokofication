import React from "react";
import { Link } from "react-router-dom";

const NewButton = ({ path }) => {
  return (
    <div className="ml-auto">
      <Link to="new">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 sm:py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 sm:mr-4 sm:my-auto mr-2"
        >
          Add {path}
        </button>
      </Link>
    </div>
  );
};

export default NewButton;
