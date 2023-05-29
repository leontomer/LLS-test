import React, { useContext, useEffect } from "react";
import { UsersContext } from "../../UsersContextProvider";
import { AppBar, Toolbar, MenuItem, Select } from "@mui/material";
import { getUsers } from "../../api/GetUsers";

export default function TopBar() {
  const { users, setUsers, selectedUserId, setSelectedUserId } =
    useContext(UsersContext);

  useEffect(() => {
    (async () => {
      const users = await getUsers();
      setUsers(users);
    })();
  }, []);

  const handleUserChange = (e) => {
    setSelectedUserId(e.target.value);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <div className="select-user">
            <Select value={selectedUserId} onChange={handleUserChange}>
              {users?.map?.((user) => (
                <MenuItem key={user.userId} value={user.userId}>
                  {user.userName}
                </MenuItem>
              ))}
            </Select>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
