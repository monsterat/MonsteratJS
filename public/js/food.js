console.log("HELLO WORLD!");


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

for(var i= 0;i<7;i++){


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
let serving = document.getElementById("inputMealServings");
let date = document.getElementById("inputDate");
let calories = document.getElementById("inputCalories");
let protein = document.getElementById("inputProtein");
  console.log(meal);
let che =   document.getElementById("foodHistoryTable").rows[2].cells[3];
let aaa = "<td><div><p id=\"MBName\">Meal Name : None</p> </div></td>"
document.getElementById("foodHistoryTable").rows[2].cells[3] = aaa;

  console.log(document.getElementById("foodHistoryTable").rows[2].cells[3]);
}

