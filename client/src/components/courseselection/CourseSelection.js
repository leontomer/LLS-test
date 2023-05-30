import React, { useEffect, useContext } from "react";
import { Card, Button } from "@mui/material";
import { getCourses } from "../../api/GetCourses";
import { useNavigate } from "react-router-dom";
import {
  courseNameText,
  courseStatusText,
  showCourseProgressText,
} from "../../Constants";
import { CoursesContext } from "../../contexts/coursesContext";
import "./CourseSelection.css";

export default function CourseSelection(props) {
  const { courses, setCourses, setSelectedCourse } = useContext(CoursesContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!courses) {
      (async () => {
        const courses = await getCourses(props.selectedUserId);
        setCourses(courses);
      })();
    }
  }, []);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    navigate("/coursedetails");
  };

  const handleShowCourseProgress = (course) => {
    setSelectedCourse(course);
    navigate("/courseprogress");
  };

  return (
    <div>
      {courses?.map?.((course) => (
        <div className="container">
          <Card
            sx={{
              padding: "10px",
              marginBottom: "5px",
              marginLeft: "30%",
              marginTop: "6%",
              cursor: "pointer",
              maxWidth: "300px",
            }}
            onClick={() => handleSelectCourse(course)}
          >
            {courseNameText}: {course.courseName}
            <div>
              {courseStatusText}: {course.status}
            </div>
          </Card>
          <div className="course-container">
            <Button
              variant="contained"
              onClick={() => handleShowCourseProgress(course)}
            >
              {showCourseProgressText}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
