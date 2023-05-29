import React, { createContext, useState } from "react";

const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(-1);
  //   const [state2, setState2] = useState(initialState2);

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

export { UsersContext, UsersContextProvider };
