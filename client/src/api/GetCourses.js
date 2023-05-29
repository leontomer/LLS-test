import axios from "axios";

export const getCourses = async (userName) => {
  const courses = await axios.get("http://localhost:5000/courses/", {
    params: {
      userName: userName,
    },
  });
  return courses.data;
};
