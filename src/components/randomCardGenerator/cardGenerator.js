import PlayingCard from "../CardDisplay/PlayingCard";

function RandomCardGenerator() {
  var min = 0;
  var max = 20;

  var randomProtein = Math.floor(Math.random() * (max - min + 1)) + min;
  var randomCarb = Math.floor(Math.random() * (max - min + 1)) + min;
  var randomVeg = Math.floor(Math.random() * (max - min + 1)) + min;

  if (randomProtein <= 9) {
    //Chicken
    console.log("Random Protein = Chicken");
    document.getElementById("randomCard").value = "Chicken";
    document.getElementById(
      "cardImage"
    ).src = require("../Images/icons/Card5.jpg");
  } else if (randomProtein >= 10 && randomProtein <= 14) {
    //Salmon
    console.log("Random Protein = Salmon");
    document.getElementById("randomCard").value = "Salmon";
    document.getElementById(
      "cardImage"
    ).src = require("../Images/icons/Card1.jpg");
  } else if (randomProtein >= 15 && randomProtein <= 19) {
    //Turkey
    console.log("Random Protein = Turkey");
    document.getElementById("randomCard").value = "Turkey";
    document.getElementById(
      "cardImage"
    ).src = require("../Images/icons/Card1.jpg");
  } else if (randomProtein >= 20) {
    //Steak
    console.log("Random Protein =  Steak");
    document.getElementById("randomCard").value = "Steak";
    document.getElementById(
      "cardImage"
    ).src = require("../Images/icons/Card1.jpg");
  } else {
    document.getElementById("randomCard").value = "No Protein Packs Left!";
  }

  if (randomCarb <= 9) {
    // Potatoes
    console.log("Random Carb = Potatoes");
    document.getElementById("randomCard").value = "Potatoes";
    document.getElementById(
      "cardImage"
    ).src = require("../Images/icons/Card2.jpg");
  } else if (randomCarb >= 10 && randomCarb <= 14) {
    //Chips
    console.log("Random Carb = Chips");
    document.getElementById("randomCard").value = "Chips";
    document.getElementById(
      "cardImage"
    ).src = require("../Images/icons/Card2.jpg");
  } else if (randomCarb >= 15 && randomCarb <= 19) {
    //Pasta
    console.log("Random Carb = Pasta");
    document.getElementById("randomCard").value = "Pasta";
    document.getElementById(
      "cardImage"
    ).src = require("../Images/icons/Card2.jpg");
  } else if (randomCarb >= 20) {
    //Rice
    console.log("Random Carb = Rice");
    document.getElementById("randomCard").value = "Rice";
    document.getElementById(
      "cardImage"
    ).src = require("../Images/icons/Card2.jpg");
  } else {
    document.getElementById("randomCard").value = "No Carb Packs Left!";
  }

  if (randomVeg <= 9) {
    //Broccoli
    console.log("Random Veg = Broccoli");
    document.getElementById("randomCard").value = "Broccoli";
    document.getElementById(
      "cardImage"
    ).src = require("../Images/icons/Card3.jpg");
  } else if (randomVeg >= 10 && randomVeg <= 14) {
    //Peas
    console.log("Random Veg = Peas");
    document.getElementById("randomCard").value = "Peas";
    document.getElementById(
      "cardImage"
    ).src = require("../Images/icons/Card3.jpg");
  } else if (randomVeg >= 15 && randomVeg <= 19) {
    //Carrots
    console.log("Random Veg = Carrots");
    document.getElementById("randomCard").value = "Carrots";
    document.getElementById(
      "cardImage"
    ).src = require("../Images/icons/Card3.jpg");
  } else if (randomVeg >= 20) {
    //Sprouts
    console.log("Random Veg = Sprouts ");
    document.getElementById("randomCard").value = "Sprouts";
    document.getElementById(
      "cardImage"
    ).src = require("../Images/icons/Card3.jpg");
  } else {
    document.getElementById("randomCard").value = "No Veg Packs Left!";
  }
}

export default RandomCardGenerator;
