
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

var button = document.getElementById("btn");
var input = document.getElementById("input_newEntry");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
    var li = `<li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
    ${input.value}
  </li>`
  $(".list-group").append(li)
})



// let tasker = {
//     selectElements: function() {
//       this.taskInput = document.getElementById("input-task");
//       this.taskList = document.getElementById("tasks");
//       this.taskListChildren = this.taskList.children;
//       this.addButton = document.getElementById("add-task-btn");
//       this.errorMessage = document.getElementById("error");
//     },
//     buildTask: function(){
//         let taskListItem, taskCheckbox, taskValue, taskButton, taskTrush;
//         taskListItem = document.createElement("li");
//         taskListItem.setAttribute("class", "task");
//         //checkbox
//         taskCheckbox = document.createElement("input");
//         taskCheckbox.setAttribute("type", "checkbox");
//         //taskvalue
//         taskValue = document.createTextNode(this.taskInput.Value);
//         //deletebutton
//         taskButton =  document.createElement("button");
        
//         //append elements to tasklist
//         taskListItem.appendChild(taskCheckbox);
//         taskListItem.appendChild(taskValue);
//         taskListItem.appendChild(taskButton);

//         //add task to tasklist
//         this.taskList.appendChild(taskListItem);
        
//     }
//   };

}

