const express = require("express");
const { users } = require("../mock/mockData");
const router = express.Router();

router.get("/courses", (req, res) => {
  try {
    const { userName } = req.query;
    const user = users.filter((user) => user.userName === userName);
    res.json(user[0]?.courses);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
