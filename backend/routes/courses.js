const express = require("express");
const { users } = require("../mock/mockData");
const router = express.Router();

router.get("/courses", (req, res) => {
  try {
    const { selectedUserId } = req.query;
    const user = users.filter(
      (user) => user.userId === parseInt(selectedUserId)
    );
    res.json(user[0]?.courses);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
