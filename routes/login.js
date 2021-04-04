const express = require("express");
const router = express.Router();
// const database = require("../database");

// router.get("/", (req, res) => {
//   database.any("SELECT * FROM users;").then((users) => {
//     res.render("pages/login", {
//       title: "Login",
//       users: users,
//     });
//   }).catch((err) => {
//     console.log("ERROR")
//     console.log(err);
//   })

router.get("/", (req, res) => {
  res.render("pages/login", {
    title: "Login",
  });
});
  
// });

module.exports = router;

/*database.query("SELECT * FROM users", (err, res) => {
  if (err) throw err;

  // print the records as a response
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});*/

