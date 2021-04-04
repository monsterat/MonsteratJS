
var button = document.getElementById("btn");
var inputTaskName = document.getElementById("input_newEntry");
var date = document.getElementById("dueDate")
var difficulty = document.getElementById("difficultyDropdown")
var strikethrough = false;

var taskList = [];
var i = 0;


button.addEventListener("click", function () {
  var x = difficulty.selectedIndex;
  //create task object
  taskList.push({
    "Task Name": inputTaskName.value,
    "Due Date": date.value,
    "Difficulty": document.getElementsByTagName("option")[x].textContent
  });

  //create task list rows
  addItemToTable(taskList);

})

//delete row function from href
function Deleteqry(id, _this) {

  $(_this).closest('tr').remove();
}

//function to check if checkbox is checked
// function validate() {
//   var checkbox = document.getElementById("checkbox");
//   if (checkbox.checked) {
//     strikethrough = true;
//     // console.log(strikethrough);
//   }
//   else if (checkbox.checked === false) {
//     // alert("You didn't check it!");
//     strikethrough = false;
//     // console.log(false);
//   }
// }

// onclick='validate()' 

//add rows function
function addItemToTable(taskList) {
  var tbodyForTasks = document.getElementById("tbodyForTasks");
  var myActions = "<a onclick='Deleteqry(" + i + ", this)' href='#'>Delete</a>";

  var preparedRowHTML = "<tr>";
  preparedRowHTML += "<td><input type='checkbox' id='checkbox'><label for='checkbox'><span class='custom-checkbox'></span>" + taskList[i]["Task Name"] + "</td>";
  preparedRowHTML += "<td>" + taskList[i]["Due Date"] + "</td>";
  preparedRowHTML += "<td>" + taskList[i]["Difficulty"] + "</td>";
  preparedRowHTML += "<td>" + myActions + "</td>";
  preparedRowHTML += "</tr>";
  i++;
  tbodyForTasks.innerHTML += preparedRowHTML;
  console.log(taskList)
  // var check = document.getElementById("checkbox");
  // console.log(check.checked);
}

onclick = 'Deleteqry(" + i + ", this)'