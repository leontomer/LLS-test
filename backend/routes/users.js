const express = require("express");
const { users } = require("../mock/mockData");
const router = express.Router();

router.get("/users", (req, res) => {
  try {
    res.json(users);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
