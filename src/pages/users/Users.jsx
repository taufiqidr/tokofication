import React from "react";
import TopBar from "../../../components/TopBar";
import UserTable from "./UserTable";

const Users = () => {
  return (
    <div className="max-w-full">
      <TopBar path={"user"} title={"Manage Users"} btn_text={"User"} />
      <div className="flex justify-center flex-col">
        <div className="flex justify-center">
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default Users;
