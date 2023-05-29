import React, { useContext } from "react";
import Card from "@mui/material/Card";
import { CoursesContext } from "../../contexts/coursesContext";
import {
  courseNameText,
  courseTutorText,
  courseDescriptionText,
} from "../../Constants";

export default function CourseDetails() {
  const { selectedCourse } = useContext(CoursesContext);
  return (
    <div>
      <Card
        sx={{
          padding: "5px",
          marginLeft: "30%",
          marginTop: "5%",
        }}
      >
        {courseNameText + ": " + selectedCourse.courseName}
        <div>
          {courseDescriptionText +
            ": " +
            selectedCourse.courseOverview.description}
        </div>
        <div>
          {courseTutorText + ": " + selectedCourse.courseOverview.instructor}
        </div>
      </Card>
    </div>
  );
}
