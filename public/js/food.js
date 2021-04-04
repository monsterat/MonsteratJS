console.log("HELLO WORLD!");

let x = document.getElementById("foodSearch").value;
console.log(x);

const settings = {
  async: true,
  crossDomain: true,
  url:
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=2000&diet=vegetarian&exclude=shellfish%2C%20olives",
  method: "GET",
  headers: {
    "x-rapidapi-key": "dc4cf08b30mshec08ef4d4bf3400p1ebf39jsnc6890c2d1747",
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
