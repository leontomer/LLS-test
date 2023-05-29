import React, { createContext, useState } from "react";

import { UsersContext } from "../contexts/usersContext";

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(-1);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        selectedUserId,
        setSelectedUserId,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContextProvider };
