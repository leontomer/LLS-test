import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseSelection from "./components/courseselection/CourseSelection";
import CourseDetails from "./components/coursedetails/CourseDetails";
import { UsersContext } from "./contexts/usersContext";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import CourseProgress from "./components/courseprogress/CourseProgress";
function App() {
  const { selectedUserId } = useContext(UsersContext);
  return (
    <div>
      <Router>
        <TopBar />
        <SideBar />
        <Routes>
          <Route path="/" />
          <Route
            path="/courseselection"
            element={<CourseSelection selectedUserId={selectedUserId} />}
          />
          <Route path="/coursedetails" element={<CourseDetails />} />
          <Route path="/courseprogress" element={<CourseProgress />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
