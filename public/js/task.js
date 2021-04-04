var button = document.getElementById("btn");
var inputTaskName = document.getElementById("input_newEntry");
var date = document.getElementById("dueDate")
var difficulty = document.getElementById("difficultyDropdown")
var ul = document.querySelector("ul");

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

function deleteItem(rowToDelete) {
	console.log("deleteItem triggered for row = " + rowToDelete);
	var itemToRemove = _.findWhere(listItems, {"id": rowToDelete});
	listItems = _.without(listItems, itemToRemove);
	// IMPLEMENT LATER

	// go to DOM and delete the row
	document.getElementById("rowForItem_" + rowToDelete).innerHTML = "";
}

function addItemToTable(taskList) {
  var tbodyForTasks = document.getElementById("tbodyForTasks");
  var myActions = "<a onclick='deleteItem(" + taskList[i] + ")' href='#'>Delete This One</a>";

  var preparedRowHTML = "<tr>";
  preparedRowHTML += "<td>" + taskList[i]["Task Name"] + "</td>";
  preparedRowHTML += "<td>" + taskList[i]["Due Date"] + "</td>";
  preparedRowHTML += "<td>" + taskList[i]["Difficulty"] + "</td>";
  preparedRowHTML += "<td>" + myActions + "</td>";
  preparedRowHTML += "</tr>";
  i++;
  tbodyForTasks.innerHTML += preparedRowHTML;

}