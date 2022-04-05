function RandomCardGenerator() {
  //RANDOM PROTEIN RANGE: 0-9
  //RANDOM CARB RANGE: 10-14
  //RANDOM VEG RANGE: 15-19
  //RANDOM STEAK RANGE: 20

  var min = 0;
  var max = 20;
  var randomProtein = Math.floor(Math.random() * (max - min + 1)) + min;
  var randomCarb = Math.floor(Math.random() * (max - min + 1)) + min;
  var randomVeg = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(randomProtein);
  console.log(randomCarb);
  console.log(randomVeg);

  if (randomProtein <= 9) {
    //Chicken
    console.log("Random Protein = Chicken");
    document.getElementById("randomProtein").value = "Chicken";
  } else if (randomProtein >= 10 && randomProtein <= 14) {
    //Salmon
    console.log("Random Protein = Salmon");
    document.getElementById("randomProtein").value = "Salmon";
  } else if (randomProtein >= 15 && randomProtein <= 19) {
    //Turkey
    console.log("Random Protein = Turkey");
    document.getElementById("randomProtein").value = "Turkey";
  } else if (randomProtein >= 20) {
    //Steak
    console.log("Random Protein =  Steak");
    document.getElementById("randomProtein").value = "Steak";
  }

  // console.log("Random Veg = " + randomProtein)
  if (randomCarb <= 9) {
    // Potatoes
    console.log("Random Carb = Potatoes");
    document.getElementById("randomCarb").value = "Potatoes";
  } else if (randomCarb >= 10 && randomCarb <= 14) {
    //Chips
    console.log("Random Carb = Chips");
    document.getElementById("randomCarb").value = "Chips";
  } else if (randomCarb >= 15 && randomCarb <= 19) {
    //Pasta
    console.log("Random Carb = Pasta");
    document.getElementById("randomCarb").value = "Pasta";
  } else if (randomCarb >= 20) {
    //Rice
    console.log("Random Carb = Rice");
    document.getElementById("randomCarb").value = "Rice";
  }

  // console.log("Random Carb = " + randomVeg)
  if (randomVeg <= 9) {
    //Broccoli
    console.log("Random Veg = Broccoli");
    document.getElementById("randomVeg").value = "Broccoli";
  } else if (randomVeg >= 10 && randomVeg <= 14) {
    //Peas
    console.log("Random Veg = Peas");
    document.getElementById("randomVeg").value = "Peas";
  } else if (randomVeg >= 15 && randomVeg <= 19) {
    //Carrots
    console.log("Random Veg = Carrots");
    document.getElementById("randomVeg").value = "Carrots";
  } else if (randomVeg >= 20) {
    //Sprouts
    console.log("Random Veg = Sprouts ");
    document.getElementById("randomVeg").value = "Sprouts";
  }
}

export default RandomCardGenerator;
