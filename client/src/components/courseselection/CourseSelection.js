import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { getCourses } from "../../api/GetCourses";
import { useNavigate } from "react-router-dom";
import { courseNameText, courseStatusText } from "../../Constants";
export default function CourseSelection(props) {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const courses = await getCourses(props.userName);
      setCourses(courses);
    })();
  }, [props.userName]);

  return (
    <div>
      Course Selection Page
      {courses?.map?.((course) => (
        <Card
          sx={{
            padding: "5px",
            marginLeft: "30%",
            marginTop: "5%",
            cursor: "pointer",
          }}
          onClick={() => navigate("/coursedetails")}
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
