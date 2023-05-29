import React from "react";
import Card from "@mui/material/Card";
import { demoCourseText } from "../../Constants";
export default function CourseDetails() {
  return (
    <div>
      <Card
        sx={{
          padding: "5px",
          marginLeft: "30%",
          marginTop: "5%",
        }}
      >
        {demoCourseText}
      </Card>
    </div>
  );
}
