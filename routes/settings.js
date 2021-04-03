const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/settings", {
    title: "Settings",
  });
});

module.exports = router;
