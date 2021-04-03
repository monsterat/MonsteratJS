const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/food", {
    title: "Food",
  });
});

module.exports = router;
