import React, { createContext, useState } from "react";

import { CoursesContext } from "../contexts/coursesContext";

const CoursesContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});
  return (
    <CoursesContext.Provider
      value={{
        courses,
        setCourses,
        selectedCourse,
        setSelectedCourse,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export { CoursesContextProvider };
