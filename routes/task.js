const express = require("express");
const router = express.Router();


router.get("/", (req, res) => { //links to html
  res.render("pages/task", {
    title: "Task",
  });
});

module.exports = router;
