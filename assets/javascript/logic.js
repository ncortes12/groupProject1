// Initialize Firebase
var config = {
  apiKey: "AIzaSyCywidV9KECB6FaxejYiJIjcPIeEu7I3zs",
  authDomain: "foodmacgyver-11d8c.firebaseapp.com",
  databaseURL: "https://foodmacgyver-11d8c.firebaseio.com",
  projectId: "foodmacgyver-11d8c",
  storageBucket: "foodmacgyver-11d8c.appspot.com",
  messagingSenderId: "198176051883"
};
firebase.initializeApp(config);

var database = firebase.database();

// Variables for API query
var ingredients;
var time;
var excluded;

// Adding the API into a variable
var food = "https://api.edamam.com/search?app_id=bffc1c60&app_key=f34dee8c2c3b557affccc392f878882b&q=" + ingredients + "&time=1-" + time + "&excluded=" + excluded;






// Authentication
var username;

var beer = url = "https://api.punkapi.com/v2/beers/?food=" + title + "&per_page=10"
var title;

$("#button").on("click", function (event) {
    event.preventDefault();

    var ingredientsInput = $("#ingredientsInput");
    var excludedInput = $("#excludedInput");
    var timeInput = $("#timeInput");

    var ingredientsInput = ingredientsInput.val().trim();
    ingredientsInput.val(""); 

    var excludedInput = excludedInput.val().trim();
    excludedInput.val("");

    var timeInput = timeInput.val().trim();
    timeInput.val("");

    console.log(ingredientsInput, excludedInput, timeInput);

    $("#results").append("<div>test</div>");


    });

  // API GET Request
$.ajax({
  url: food,
  method: "GET"
})
  .then(function (response) {
    var results = response.hits;
    for (var i = 0; i < results.length; i++) {
      // After the data from the AJAX request comes back


      // Saving properties into variables
      var recLabel = results[i].recipe.label;
      var recImage = results[i].recipe.image;
      var recURL = results[i].recipe.url;
      var recTime = results[i].recipe.totalTimeInSeconds;
      
      


      console.log(recLabel, recImage, recURL, recTime);

      console.log(response);

      var beerSearch = recLabel.replace(/ /g, "_");
      console.log(beerSearch);
    }


database.ref(username).push({



})

database.ref(username).on("child_added", function (snapshot) {
  var snap = snapshot.val();


})

var replaceSpace = "chicken salad";

var result = replaceSpace.replace(" ", "-");

console.log(result);