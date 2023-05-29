import axios from "axios";

export const getCourses = async (selectedUserId) => {
  const courses = await axios.get("http://localhost:5000/courses/", {
    params: {
      selectedUserId: selectedUserId,
    },
  });
  return courses.data;
};
