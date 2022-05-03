import { CoPresent } from '@mui/icons-material';

const axios = require('axios').default;

var ProteinPacks = 5;
var CarbPacks = 5;
var VegPacks = 5;
var ModPacks = 5;
var WildPacks = 5;

async function RandomCardGenerator() {

  try{
    const cards = await axios.get('http://localhost:8080/api');
    //console.log(cards.data);
  
    var min = 0;
    var max = 20;

    var randomType = Math.floor(Math.random() * 5);
    //random var to decide what type of card will be generated
    var randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    //random index to decide what card will be generated
    // console.log(randomType);
    // console.log(randomIndex);
    

    switch(randomType){
        
        case 0: {
            //console.log("Wildcard");
            if (randomIndex <= 9) {
                //Trip the chef
                var card_info = cards.data[randomType].CardObject[0];
                console.log(card_info);
                var cardname = card_info.Card_Name;                
                document.getElementById("randomCard").value = cardname;
                // var elem = document.getElementById("cardImage");
                // elem.src = "../Images/icons/Card5.jpg";
                //code for changing image based on type, images aren't load correctly
            } 
            else if (randomIndex >= 10 && randomIndex <= 14) {
                //Push your opponents food
                var card_info = cards.data[randomType].CardObject[1];
                console.log(card_info);
                var cardname = card_info.Card_Name;               
                document.getElementById("randomCard").value = cardname;
            } 
            else if (randomIndex >= 15 && randomIndex <= 19) {
                //Ramsay complements
                var card_info = cards.data[randomType].CardObject[2];
                console.log(card_info);
                var cardname = card_info.Card_Name;              
                document.getElementById("randomCard").value = cardname;
            } 
            else if (randomIndex >= 20) {
                //Cooked to perfection
                var card_info = cards.data[randomType].CardObject[3];
                console.log(card_info);
                var cardname = card_info.Card_Name;              
                document.getElementById("randomCard").value = cardname;
            }
            //console.log("Setting randomCard id to fixedCard");
            var elem = document.getElementById("randomCard");
            elem.id = "fixedCard";
            return;
        }
        case 1: {
            //console.log("Protein");
            if (randomIndex <= 9) {
                //Chicken
                var card_info = cards.data[randomType].CardObject[0];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              } else if (randomIndex >= 10 && randomIndex <= 14) {
                //Salmon
                var card_info = cards.data[randomType].CardObject[1];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              } else if (randomIndex >= 15 && randomIndex <= 19) {
                //Turkey
                var card_info = cards.data[randomType].CardObject[2];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              } else if (randomIndex >= 20) {
                //Steak
                var card_info = cards.data[randomType].CardObject[3];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              }
              //console.log("Setting randomCard id to fixedCard");
              var elem = document.getElementById("randomCard");
              elem.id = "fixedCard";
              return;
        }
        case 2: {
            //console.log("Vegetables");
            if (randomIndex <= 9) {
                //Sprouts
                var card_info = cards.data[randomType].CardObject[0];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              } else if (randomIndex >= 10 && randomIndex <= 14) {
                //Peas
                var card_info = cards.data[randomType].CardObject[1];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              } else if (randomIndex >= 15 && randomIndex <= 19) {
                //Carrots
                var card_info = cards.data[randomType].CardObject[2];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              } else if (randomIndex >= 20) {
                //Broccoli
                var card_info = cards.data[randomType].CardObject[3];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              }
              //console.log("Setting randomCard id to fixedCard");
              var elem = document.getElementById("randomCard");
              elem.id = "fixedCard";
              return;
        }
        case 3: {
            //console.log("Carbs");
            if (randomIndex <= 9) {
                //Potatoes
                var card_info = cards.data[randomType].CardObject[0];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              } else if (randomIndex >= 10 && randomIndex <= 14) {
                //Chips
                var card_info = cards.data[randomType].CardObject[1];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              } else if (randomIndex >= 15 && randomIndex <= 19) {
                //Pasta
                var card_info = cards.data[randomType].CardObject[2];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              } else if (randomIndex >= 20) {
                //Rice
                var card_info = cards.data[randomType].CardObject[3];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              }
              //console.log("Setting randomCard id to fixedCard");
              var elem = document.getElementById("randomCard");
              elem.id = "fixedCard";
              return;
        }
        case 4: {
            //console.log("Modifier");
            if (randomIndex <= 9) {
                //Salt and Pepper
                var card_info = cards.data[randomType].CardObject[0];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              } else if (randomIndex >= 10 && randomIndex <= 14) {
                //Ketchup
                var card_info = cards.data[randomType].CardObject[1];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              } else if (randomIndex >= 15 && randomIndex <= 19) {
                //Gravy
                var card_info = cards.data[randomType].CardObject[2];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              } else if (randomIndex >= 20) {
                //Saffron
                var card_info = cards.data[randomType].CardObject[3];
                console.log(card_info);
                var cardname = card_info.Card_Name;
                document.getElementById("randomCard").value = cardname;
              }
              //console.log("Setting randomCard id to fixedCard");
              var elem = document.getElementById("randomCard");
              elem.id = "fixedCard";
              return;
        }
    }
  }
  catch(error){
    console.error(error);
  }
}

export { ProteinPacks, CarbPacks, VegPacks };
export default RandomCardGenerator;