import React from "react";
import Category from "./Category";

const CategoryList = () => {
  const content = [];
  for (let index = 0; index < 100; index++) {
    content.push(<Category key={index} index={index} />);
  }
  return <tbody>{content}</tbody>;
};

export default CategoryList;
