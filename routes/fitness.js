const express = require("express");
const router = express.Router();
const db = require("../database.js");

router.get("/", (req, res) => {
  db.any("SELECT * FROM activities;")
    .then((response) => {
      res.render("pages/fitness", {
        title: "Fitness",
        activities: response,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
