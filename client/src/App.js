import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import CourseSelection from "./components/courseselection/CourseSelection";
import { AppBar, Toolbar, MenuItem, Select } from "@mui/material";
import { getUsers } from "../src/api/GetUsers";
import CourseDetails from "./components/coursedetails/CourseDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  useEffect(() => {
    (async () => {
      const users = await getUsers();
      setUsers(users);
    })();
  }, []);

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  return (
    <div>
      <Router>
        <div>
          <AppBar position="fixed">
            <Toolbar>
              <div className="select-user">
                <Select value={selectedUser} onChange={handleUserChange}>
                  {users?.map?.((user) => (
                    <MenuItem key={user.userId} value={user.userName}>
                      {user.userName}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <SideBar />
        </div>
        <Routes>
          <Route path="/" />
          <Route
            path="/courseselection"
            element={<CourseSelection userName={selectedUser} />}
          />
          <Route path="/coursedetails" element={<CourseDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
