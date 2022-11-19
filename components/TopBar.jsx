import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import NewButton from "./NewButton";

const TopBar = ({
  child,
  edit,
  title,
  modal,
  setModal,
  path,
  btn_text,
  id,
}) => {
  return (
    <div
      className={`sticky top-0 bg-gray-800 flex flex-row justify-start items-center border-b border-gray-700 h-12 sm:h-16`}
    >
      {child && (
        <div className="ml-3">
          <span className="hover:text-blue-400 text-white text-xl">
            <Link to={`/${path}`}>
              <FaArrowLeft />
            </Link>
          </span>
        </div>
      )}
      <div>
        <h1 className="dark:text-white p-3 text-black text-lg sm:text-3xl font-semibold">
          {title}
        </h1>
      </div>
      {!child && <NewButton path={btn_text} />}
      {edit && !modal && (
        <DeleteButton
          modal={modal}
          setModal={setModal}
          path={btn_text}
          id={id}
        />
      )}
    </div>
  );
};

export default TopBar;
