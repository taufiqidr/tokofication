import React from "react";
import UserList from "./UserList";

const UserTable = () => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-600">
        <tr>
          <th scope="col" className="py-3 px-6">
            Username
          </th>
          <th scope="col" className="py-3 px-6 border-l border-gray-400">
            Action
          </th>
        </tr>
      </thead>
      <UserList />
    </table>
  );
};

export default UserTable;
