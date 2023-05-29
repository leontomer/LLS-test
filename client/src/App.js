import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import CourseSelection from "./components/courseselection/CourseSelection";
import CourseDetails from "./components/coursedetails/CourseDetails";
import { UsersContext } from "./contexts/usersContext";
import TopBar from "./components/topbar/TopBar";

function App() {
  const { selectedUserId } = useContext(UsersContext);
  return (
    <div>
      <TopBar />
      <Router>
        <div>
          <SideBar />
        </div>
        <Routes>
          <Route path="/" />
          <Route
            path="/courseselection"
            element={<CourseSelection selectedUserId={selectedUserId} />}
          />
          <Route path="/coursedetails" element={<CourseDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
