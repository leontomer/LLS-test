import React, { useContext } from "react";
import { CoursesContext } from "../../contexts/coursesContext";
import { Button } from "@mui/material";
import "./CourseProgress.css";

export default function CourseProgress() {
  const { selectedCourse, setSelectedCourse, setCourses, courses } =
    useContext(CoursesContext);
  console.log(selectedCourse);

  const handleChangeLessonStatus = (index) => {
    selectedCourse.lessons[index] = !selectedCourse.lessons[index];
    setSelectedCourse(selectedCourse);
    for (let i = 0; i < courses.length; i++) {
      if (courses[i] === selectedCourse.courseId) {
        courses[i] = selectedCourse;
      }
    }
    setCourses([...courses]);
  };
  return (
    <div className="course-completion-container">
      lessons of course completion status:
      <div>
        {selectedCourse?.lessons?.map?.((lesson, index) => (
          <>
            <li key={index}>
              {lesson
                ? `lesson ${index} completed`
                : `lesson ${index} not completed`}
            </li>
            <Button onClick={() => handleChangeLessonStatus(index)}>
              Change Completion Status
            </Button>
          </>
        ))}
      </div>
    </div>
  );
}
