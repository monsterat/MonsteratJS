const db = require("../../database");

//get the value of text
var firstname = $("#firstname").val();

function createUser(){
  // thisObject = {firstname: firstname.value, lastname: lastname.value, email: email.value, password: password.value, gender: gender.value, weight: weight.value, height: height.value};
  


    //get the user input value
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var dob = document.getElementById("dob").value;
    console.log(firstname);

    // //insert them into the db
    db.any("INSERT INTO Users (firstname, lastname, email, password, gender, weight, height, dob) VALUES ('" + firstname + "','" + lastname + "','" + email + "','" + password + "','" + gender + "','" + height + "','" + weight + "','" + dob + "');")
    .then((response) => {
        alert('User created');
        db.close();
    })
    .catch((err) => {
        console.log(err);
    });







};
