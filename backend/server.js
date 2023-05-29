const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const usersAPI = require("./routes/users");
const coursesAPI = require("./routes/courses");
app.use(cors());
app.use(usersAPI);
app.use(coursesAPI);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
