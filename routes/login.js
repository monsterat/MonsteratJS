const express = require("express");
const router = express.Router();
// const db = require("../database.js");

router.get("/", (req, res) => {
  res.render("pages/login", {
    title: "Login",
  });


//create a user
// var insertUser;
// $(enter).on('click', createUser);


});



// function createUser(event) {
//     event.preventDefault();
//     //...
//     thisObject = {course: courseSelect.value, score: scoreText.value, pars: parsText.value, birdies: birdiesText.value};
//  }
  
module.exports = router;



