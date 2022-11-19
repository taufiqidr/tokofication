import React from "react";
import TopBar from "../../../components/TopBar";
import CategoryTable from "./CategoryTable";

const Categories = () => {
  return (
    <div className="max-w-full">
      <TopBar
        path={"category"}
        title={"Manage Categories"}
        btn_text={"Category"}
      />
      <div className="flex justify-center flex-col">
        <div className="flex justify-center">
          <CategoryTable />
        </div>
      </div>
    </div>
  );
};

export default Categories;
