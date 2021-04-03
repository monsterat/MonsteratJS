const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/fitness", {
    title: "Fitness",
  });
});

module.exports = router;
