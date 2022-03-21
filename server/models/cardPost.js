const mongoose = require('mongoose');
//Schema
var foodcardsSchema = new mongoose.Schema({
    Cardobject:[{
        Rarity:String,
        Duration:String,
        Generation:String,
        Depletion:String,
        Card_Name:String,
        Card_Type:String
    }],
    CardBelonging:String
},{collection:'foodcards'})

//model
var foodcards = mongoose.model('foodcards',foodcardsSchema);
module.exports = foodcards;