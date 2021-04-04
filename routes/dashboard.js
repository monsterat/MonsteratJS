const express = require("express");
const router = express.Router();
const db = require("../database.js");

router.get("/", (req, res) => {
  db.query("SELECT * FROM activities WHERE user_id = 1 ORDER BY activity_date;")
    .then((activities) => {
      console.log(activities);
      var stringified = JSON.stringify(activities);
      res.render("pages/dashboard", {
        title: "Dashboard",
        activities: activities,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
