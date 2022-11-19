import React from "react";
import User from "./User";

const UserList = () => {
  const content = [];
  for (let index = 0; index < 100; index++) {
    content.push(<User key={index} index={index} />);
  }
  return <tbody>{content}</tbody>;
};

export default UserList;
