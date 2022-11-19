import React from "react";

const DeleteButton = ({ modal, setModal, path }) => {
  return (
    <div className="ml-auto">
      <button
        type="button"
        onClick={() => setModal(true)}
        className={`${
          modal ? "hidden" : "block"
        }text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 sm:py-3 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 sm:mr-4 sm:my-auto mr-2`}
      >
        Delete {path}
      </button>
    </div>
  );
};

export default DeleteButton;
