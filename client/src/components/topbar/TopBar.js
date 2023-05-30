import React, { useContext, useEffect } from "react";
import { UsersContext } from "../../contexts/usersContext";
import { CoursesContext } from "../../contexts/coursesContext";
import {
  AppBar,
  Toolbar,
  MenuItem,
  Select,
  Box,
  CssBaseline,
} from "@mui/material";
import { getUsers } from "../../api/GetUsers";
import { appTitle } from "../../Constants";
import { useNavigate } from "react-router-dom";
import "./TopBar.css";

export default function TopBar() {
  const navigate = useNavigate();
  const { users, setUsers, selectedUserId, setSelectedUserId } =
    useContext(UsersContext);
  const { setCourses } = useContext(CoursesContext);
  useEffect(() => {
    (async () => {
      const users = await getUsers();
      setUsers(users);
    })();
  }, []);

  const handleUserChange = (e) => {
    setSelectedUserId(e.target.value);
    setCourses([]);
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <span className="app-title" onClick={() => navigate("/")}>
            {appTitle}
          </span>
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
    </Box>
  );
}
