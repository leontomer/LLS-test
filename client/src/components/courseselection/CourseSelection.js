import React, { useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import { getCourses } from "../../api/GetCourses";
import { useNavigate } from "react-router-dom";
import { courseNameText, courseStatusText } from "../../Constants";
import { CoursesContext } from "../../contexts/coursesContext";
export default function CourseSelection(props) {
  const { courses, setCourses, setSelectedCourse } = useContext(CoursesContext);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const courses = await getCourses(props.selectedUserId);
      setCourses(courses);
    })();
  }, [props.selectedUserId]);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
    navigate("/coursedetails");
  };

  return (
    <div>
      {courses?.map?.((course) => (
        <Card
          sx={{
            padding: "10px",
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
      ))}
    </div>
  );
}
