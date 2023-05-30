import React, { useContext, useEffect } from "react";
import { CoursesContext } from "../../contexts/coursesContext";
import { Button } from "@mui/material";
import {
  completedStatus,
  inProgressStatus,
  availableStatus,
} from "../../Constants";
import "./CourseProgress.css";

export default function CourseProgress() {
  const { selectedCourse, setSelectedCourse, setCourses, courses } =
    useContext(CoursesContext);

  useEffect(() => {
    let checkIfCompletedAllLessons = true;
    for (let i = 0; i < selectedCourse?.lessons?.length; i++) {
      if (!selectedCourse.lessons[i]) {
        checkIfCompletedAllLessons = false;
      }
    }
    if (
      checkIfCompletedAllLessons &&
      selectedCourse.status !== completedStatus
    ) {
      selectedCourse.status = completedStatus;
      courses[selectedCourse.courseId].status = completedStatus;
      setSelectedCourse({ ...selectedCourse });
      setCourses([...courses]);
    }
    if (
      !checkIfCompletedAllLessons &&
      (selectedCourse.status === completedStatus ||
        selectedCourse.status === availableStatus)
    ) {
      selectedCourse.status = inProgressStatus;
      courses[selectedCourse.courseId].status = inProgressStatus;
      setSelectedCourse({ ...selectedCourse });
      setCourses([...courses]);
    }
  }, [selectedCourse]);
  const handleChangeLessonStatus = (index) => {
    selectedCourse.lessons[index] = !selectedCourse.lessons[index];
    setSelectedCourse({ ...selectedCourse });
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
