console.log("HELLO WORLD!");

var foodList = [];

var foodModal = document.getElementById("addMealModal");
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var i = 0;
var button = document.getElementById("addMealButton");
function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}
var dateCounter = 0;
for (z = 1; z < 8; z++) {
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + dateCounter);
  //console.log(formatDate(tomorrow));
  document.getElementById("foodHistoryTable").rows[1].cells[z].textContent = formatDate(tomorrow);
  console.log(document.getElementById("foodHistoryTable").rows[1].cells[z].textContent);
  var dayName = days[tomorrow.getDay()];
  console.log(dayName);
  document.getElementById("foodHistoryTable").rows[0].cells[z].textContent = dayName;
  dateCounter++;
}

button.addEventListener("click", function () {

  //create task object
  //create task list rows
  //addItemToTable(foodList);

})


function addItemToTable(taskList) {
  var tbodyForMeals = document.getElementById("tbodyForTasks");
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











let d = new Date();
let t = d.getDay();

let weekday = document.querySelectorAll(".weekday");
for (let i = 0, j = 1; i < weekday.length; i++) {
	let x = t-i;
	if (t > i) {
		weekday[i].innerHTML = `${d.getMonth()+1}/${d.getDate()-x}/${d.getFullYear()}`;
	} else if (t < i) {
		weekday[i].innerHTML = `${d.getMonth()+1}/${d.getDate()+j}/${d.getFullYear()}`;
		j++
	} else if (t === i) {
		weekday[i].parentNode.style.backgroundColor = "rgb(100, 100, 100)";
		weekday[i].innerHTML = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
	}
}

function changeForm (form) {
	let otherForms = document.querySelectorAll(".inquiry-selection-active");
	for (let i = 0; i < otherForms.length; i++) {
		otherForms[i].className = "inquiry-selection";
	}

	let commissionForm = document.getElementById(`${form.value}`);
	commissionForm.className = 'inquiry-selection-active';
}


/*
let x = document.getElementById("foodSearch").value;
console.log(x);
function showHideInputOptions() {
    var x = document.getElementById("foodOptionsDiv");
    var y = document.getElementById("recipeCardsDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
      } else {
        x.s
        
        
        tyle.display = "none";
        y.style.display = "block";
      }
    } 

  let y = document.getElementById("searchRecipeButton").value
  console.log(y);
  function showHideRecipeDetails() {
      var y = document.getElementById("recipeCardsDiv");
      if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
      } else {
        x.style.display = "none";
        y.style.display = "block";
      }
    } 

/*const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=2000&diet=vegetarian&exclude=shellfish%2C%20olives",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "dc4cf08b30mshec08ef4d4bf3400p1ebf39jsnc6890c2d1747",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};
let response1;
let contents;
let a;
let b;
let c;
let z = 0;
$.ajax(settings).done(function (response) {
    var i;

for (i = 0; i < response.meals.length; i++) {
    console.log(z);
    const settings1 = {
        "async": true,
        "crossDomain": true,
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+response.meals[i].id+"/information",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "dc4cf08b30mshec08ef4d4bf3400p1ebf39jsnc6890c2d1747",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    };
    
    $.ajax(settings1).done(function (response) {
        console.log(z);
        if (z === 0){
            console.timeLog;
            a = response.image;
            console.log(a);
            console.log(response.image);
        }
        else if (z === 1){
            b = response.image;
            console.log(b);
            console.log(response.image);
        }
        
        contents += `
        <div class="card" style="width: 18rem;">
        <img src="${response.image}" alt="Card image cap"/>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      `;
        console.log(response);
        z++;
    });
}


document.getElementById("a").src= a;
console.log(a);
document.getElementById("b").src= b;
$(".recipe_contents").html(contents);
	console.log(response);

    console.log(response);
});

//$("#abc").html(contents);



const settings1 = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "dc4cf08b30mshec08ef4d4bf3400p1ebf39jsnc6890c2d1747",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(settings1).done(function (response) {
	let a = response
    console.log(response);
});
*/




function myFunction() {

var meal = document.getElementById("inputMealName1").value;
let serving = document.getElementById("inputMealServings").value;
let date = document.getElementById("inputDate").value;
let calories = document.getElementById("inputCalories").value;
let protein = document.getElementById("inputProtein").value;
let mealType = document.getElementById("mealTypeDropdown").value;
var inputDate = new Date(date);
//var dayName = days[inputDate.getDay()];


var cellCol = getCell(date);
var cellRow = 0;
  console.log(cellCol);
  console.log(mealType);
  console.log(date);
  console.log(calories);

for ( sss = 2; sss < 5; sss++){
  console.log(cellRow);
  if(document.getElementById("foodHistoryTable").rows[sss].cells[0].textContent === mealType){
    cellRow = sss;
    console.log(cellRow);
  }
  
}
  console.log(cellRow);
  document.getElementById("foodHistoryTable").rows[cellRow].cells[cellCol].textContent = meal;
 
if(foodList.length>0){
  var zz = 0;
  for (zz = 0; zz <foodList.length; zz++){
    if (foodList[zz]["Date"] == date && foodList[zz]["Type"] == mealType){
      console.log(foodList[zz]);
      foodList[zz]["Name"] =  document.getElementById("foodHistoryTable").rows[cellRow].cells[cellCol].textContent;
      foodList[zz]["Calories"] =  parseInt(calories);
      foodList[zz]["Protein"] =  parseInt(protein);
      console.log(foodList[zz]);
      zz = 10000;
    }
    else if (zz === foodList.length){
      console.log("pUSHING >1");
      foodList.push({
        "Name": meal,
        "Date": date,
        "Calories": parseInt(calories),
        "Protein": parseInt(protein),
        "Type": mealType
      });
    }

  }
  if (zz === foodList.length){
    console.log("pUSHING >1");
    foodList.push({
      "Name": meal,
      "Date": date,
      "Calories": parseInt(calories),
      "Protein": parseInt(protein),
      "Type": mealType
    });
  }
}
else{
  console.log("pUSHING");
  foodList.push({
    "Name": meal,
    "Date": date,
    "Calories": parseInt(calories),
    "Protein": parseInt(protein),
    "Type": mealType
  });
}
var totalCalorie = 0;
    var totalProtein = 0;
for (var zz = 0; zz <foodList.length; zz++){
    
    totalCalorie += parseInt(foodList[zz]["Calories"]);
    totalProtein += parseInt(foodList[zz]["Protein"]);
  }

  console.log(foodList);
  console.log(totalCalorie);
  document.getElementById("foodHistoryTable").rows[5].cells[cellCol].textContent = "Calories: " + totalCalorie + "\n\n\n\n Proteins: " + totalProtein +"g";

  console.log(foodList);
}


function getCell(inputDate){
  for (aa = 0; aa < 6; aa++){
    
    for (bb = 1; bb < 8; bb++){
      var boolean = "FALSE"
      console.log(document.getElementById("foodHistoryTable").rows[aa].cells[bb].textContent);
      if (document.getElementById("foodHistoryTable").rows[aa].cells[bb].textContent === inputDate){
        boolean = "TRUE"
        console.log(boolean);
        return bb;
        bb = 100;
        aa = 100;
      }
    }
    bb=0
    
  }
}

