const axios = require("axios").default;

var ProteinPacks = 5;
var CarbPacks = 5;
var VegPacks = 5;
var ModPacks = 5;
var WildPacks = 5;

async function RandomCardGenerator() {
  try {
    const cards = await axios.get("http://localhost:8080/api");
    //console.log(cards.data);

    var min = 0;
    var max = 20;

    var randomType = Math.floor(Math.random() * 5);
    //random var to decide what type of card will be generated
    var randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    //random index to decide what card will be generated
    // console.log(randomType);
    // console.log(randomIndex);

    switch (randomType) {
      case 0: {
        //console.log("Wildcard");
        if (randomIndex <= 9) {
          //Trip the chef
          var card_info = cards.data[randomType].CardObject[0];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
          //APPEND THE CORRECT CARD TO THE VARIABLE cardname
        } else if (randomIndex >= 10 && randomIndex <= 14) {
          //Food on the Floor
          var card_info = cards.data[randomType].CardObject[1];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        } else if (randomIndex >= 15 && randomIndex <= 19) {
          //Ramsay complements
          var card_info = cards.data[randomType].CardObject[2];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletiond").value = cardnamedepletion;
        } else if (randomIndex >= 20) {
          //Cooked to perfection
          var card_info = cards.data[randomType].CardObject[3];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        }
        //console.log("Setting randomCard id to fixedCard");
        var elem = document.getElementById("randomCard");
        elem.id = "fixedCard";
        var gen = document.getElementById("CardGeneration");
        gen.id = "fixedGeneration";
        var dep = document.getElementById("CardDepletion");
        dep.id = "fixedDepletion";
        var cardImage = document.getElementById("cardImage");
        //SET THE CORRECT IMAGE TO THE CARD
        if (randomIndex <= 9) {
          //TRIP THE CHEF
          cardImage.src = require("../Images/icons/Card5_WildCard_Trip_The_Chef.jpg");
        } else if (randomIndex >= 10 && randomIndex <= 14) {
          //FOOD ON THE FLOOR
          cardImage.src = require("../Images/icons/Card5_WildCard_Food_On_The_Floor.jpg");
        } else if (randomIndex >= 15 && randomIndex <= 19) {
          //RAMSAY COMPLEMENTS
          cardImage.src = require("../Images/icons/Card5_WildCard_RamsayComplements.jpg");
        } else if (randomIndex >= 20) {
          //COOKED TO PERFECTION
          cardImage.src = require("../Images/icons/Card5_WildCard_Cooked_to_Perfection.jpg");
        }
        cardImage.id = "fixedImage";
        return;
      }
      case 1: {
        //console.log("Protein");
        if (randomIndex <= 9) {
          //Chicken
          var card_info = cards.data[randomType].CardObject[0];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        } else if (randomIndex >= 10 && randomIndex <= 14) {
          //Salmon
          var card_info = cards.data[randomType].CardObject[1];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        } else if (randomIndex >= 15 && randomIndex <= 19) {
          //Turkey
          var card_info = cards.data[randomType].CardObject[2];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        } else if (randomIndex >= 20) {
          //Steak
          var card_info = cards.data[randomType].CardObject[3];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        }
        //console.log("Setting randomCard id to fixedCard");
        var elem = document.getElementById("randomCard");
        elem.id = "fixedCard";
        var gen = document.getElementById("CardGeneration");
        gen.id = "fixedGeneration";
        var dep = document.getElementById("CardDepletion");
        dep.id = "fixedDepletion";
        var cardImage = document.getElementById("cardImage");
        //SET THE CORRECT IMAGE TO THE CARD
        if (randomIndex <= 9) {
          //CHICKEN
          cardImage.src = require("../Images/icons/Card1_Protein_Chicken.jpg");
        } else if (randomIndex >= 10 && randomIndex <= 14) {
          //SALMON
          cardImage.src = require("../Images/icons/Card1_Protein_Salmon.jpg");
        } else if (randomIndex >= 15 && randomIndex <= 19) {
          //TURKEY
          cardImage.src = require("../Images/icons/Card1_Protein_Turkey.jpg");
        } else if (randomIndex >= 20) {
          //STEAK
          cardImage.src = require("../Images/icons/Card1_Protein_Steak.jpg");
        }
        cardImage.id = "fixedImage";
        return;
      }
      case 2: {
        //console.log("Vegetables");
        if (randomIndex <= 9) {
          //Sprouts
          var card_info = cards.data[randomType].CardObject[0];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        } else if (randomIndex >= 10 && randomIndex <= 14) {
          //Peas
          var card_info = cards.data[randomType].CardObject[1];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        } else if (randomIndex >= 15 && randomIndex <= 19) {
          //Carrots
          var card_info = cards.data[randomType].CardObject[2];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        } else if (randomIndex >= 20) {
          //Broccoli
          var card_info = cards.data[randomType].CardObject[3];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        }
        //console.log("Setting randomCard id to fixedCard");
        var elem = document.getElementById("randomCard");
        elem.id = "fixedCard";
        var gen = document.getElementById("CardGeneration");
        gen.id = "fixedGeneration";
        var dep = document.getElementById("CardDepletion");
        dep.id = "fixedDepletion";
        var cardImage = document.getElementById("cardImage");
        //SET THE CORRECT IMAGE TO THE CARD
        if (randomIndex <= 9) {
          //Sprouts
          cardImage.src = require("../Images/icons/Card3_Veg_Sprouts.jpg");
        } else if (randomIndex >= 10 && randomIndex <= 14) {
          //Peas
          cardImage.src = require("../Images/icons/Card3_Veg_Peas.jpg");
        } else if (randomIndex >= 15 && randomIndex <= 19) {
          //Carrots
          cardImage.src = require("../Images/icons/Card3_Veg_Carrot.jpg");
        } else if (randomIndex >= 20) {
          //Broccoli
          cardImage.src = require("../Images/icons/Card3_Veg_Broccoli.jpg");
        }
        cardImage.id = "fixedImage";
        return;
      }
      case 3: {
        //console.log("Carbs");
        if (randomIndex <= 9) {
          //Potatoes
          var card_info = cards.data[randomType].CardObject[0];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        } else if (randomIndex >= 10 && randomIndex <= 14) {
          //Chips
          var card_info = cards.data[randomType].CardObject[1];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        } else if (randomIndex >= 15 && randomIndex <= 19) {
          //Pasta
          var card_info = cards.data[randomType].CardObject[2];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        } else if (randomIndex >= 20) {
          //Rice
          var card_info = cards.data[randomType].CardObject[3];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        }
        //console.log("Setting randomCard id to fixedCard");
        var elem = document.getElementById("randomCard");
        elem.id = "fixedCard";
        var gen = document.getElementById("CardGeneration");
        gen.id = "fixedGeneration";
        var dep = document.getElementById("CardDepletion");
        dep.id = "fixedDepletion";
        var cardImage = document.getElementById("cardImage");
        //SET THE CORRECT IMAGE TO THE CARD
        if (randomIndex <= 9) {
          //Potatoes
          cardImage.src = require("../Images/icons/Card2_Carbs_Potato.jpg");
        } else if (randomIndex >= 10 && randomIndex <= 14) {
          //Chips
          cardImage.src = require("../Images/icons/Card2_Carbs_Chips.jpg");
        } else if (randomIndex >= 15 && randomIndex <= 19) {
          //Pasta
          cardImage.src = require("../Images/icons/Card2_Carbs_Pasta.jpg");
        } else if (randomIndex >= 20) {
          //Rice
          cardImage.src = require("../Images/icons/Card2_Carbs_Rice.jpg");
        }
        cardImage.id = "fixedImage";
        return;
      }
      case 4: {
        //console.log("Modifier");
        if (randomIndex <= 9) {
          //Salt and Pepper
          var card_info = cards.data[randomType].CardObject[0];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        } else if (randomIndex >= 10 && randomIndex <= 14) {
          //Ketchup
          var card_info = cards.data[randomType].CardObject[1];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        } else if (randomIndex >= 15 && randomIndex <= 19) {
          //Gravy
          var card_info = cards.data[randomType].CardObject[2];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        } else if (randomIndex >= 20) {
          //Saffron
          var card_info = cards.data[randomType].CardObject[3];
          console.log(card_info);
          var cardname = card_info.Card_Name;
          var cardgeneration = card_info.Generation;
          var cardnamedepletion = card_info.Depletion;
          document.getElementById("randomCard").value = cardname;
          document.getElementById("CardGeneration").value = cardgeneration;
          document.getElementById("CardDepletion").value = cardnamedepletion;
        }
        //console.log("Setting randomCard id to fixedCard");
        var elem = document.getElementById("randomCard");
        elem.id = "fixedCard";
        var gen = document.getElementById("CardGeneration");
        gen.id = "fixedGeneration";
        var dep = document.getElementById("CardDepletion");
        dep.id = "fixedDepletion";
        var cardImage = document.getElementById("cardImage");
        //SET THE CORRECT IMAGE TO THE CARD
        if (randomIndex <= 9) {
          //Salt and Pepper
          cardImage.src = require("../Images/icons/Card4_Seasoning_Salt_and_Pepper.jpg");
        } else if (randomIndex >= 10 && randomIndex <= 14) {
          //Ketchup
          cardImage.src = require("../Images/icons/Card4_Seasoning_Ketchup.jpg");
        } else if (randomIndex >= 15 && randomIndex <= 19) {
          //Gravy
          cardImage.src = require("../Images/icons/Card4_Seasoning_Gravy.jpg");
        } else if (randomIndex >= 20) {
          //Saffron
          cardImage.src = require("../Images/icons/Card4_Seasoning_Saffron.jpg");
        }
        cardImage.id = "fixedImage";
        return;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export default RandomCardGenerator;
