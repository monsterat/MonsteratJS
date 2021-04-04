const express = require("express");
const router = express.Router();
const db = require("../database.js");

router.get("/", (req, res) => {
  db.any("SELECT * FROM activities WHERE user_id = 1;")
    .then((activities) => {
      db.any("SELECT * FROM users WHERE user_id = 1;")
        .then((user) => {
          res.render("pages/fitness", {
            title: "Fitness",
            activities: activities,
            user: user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  const activity_name = req.body.selectlist;
  const activity_date = req.body.date;
  const activity_duration = req.body.duration;

  console.log("ACTIVITY NAME: " + activity_name);
  console.log("ACTIVITY DATE: " + activity_date);
  console.log("ACTIVITY DURATION: " + activity_duration);

  db.none(
    "INSERT INTO activities (activity_name, activity_duration, activity_date, user_id) VALUES ($1, $2, $3, $4);",
    [activity_name, activity_duration, activity_date, 1]
  )
    .then(() => {
      res.redirect("/fitness");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
