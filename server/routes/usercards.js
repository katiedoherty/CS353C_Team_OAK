
const express = require('express');

const router = express.Router();
const { User } = require("../models/SignUpModels");


router.put('/', async (req, res)=>{
    let upemail = req.body.email;
    let upChicken = req.body.Protein.Chicken
    let upSalmon = req.body.Protein.Salmon
    let upTurkey = req.body.Protein.Turkey
    let upSteak = req.body.Protein.Steak
    let upTripChef = req.body.WildCards.Tripthechef
    let uppushfood = req.body.WildCards.pushyouropponentsfoodoffthetable
    let upcomplementsfood = req.body.WildCards.Ramsaycomplementsyourfood
    let upcookedtoperfection =req.body.WildCards.Cookedtoperfection
    let upSprouts = req.body.Vegetables.Sprouts
    let upPeas = req.body.Vegetables.Peas
    let upCarrots =req.body.Vegetables.Carrots
    let upBroccoli =req.body.Vegetables.Broccoli
    let upPatatoes = req.body.Carbs.Patatoes
    let upChips = req.body.Carbs.Chips
    let upPasta = req.body.Carbs.Pasta
    let upRice = req.body.Carbs.Rice
    let upSaltandPepper = req.body.Modifiers.SaltAndPepper
    let upKetchup = req.body.Modifiers.Ketchup
    let upGravy = req.body.Modifiers.Gravy
    let upSaffron = req.body.Modifiers.Saffron


    try{
        //to get the updated name you have to serach for the id again as postman deos not return the updated name
        const orders =await User.findOneAndUpdate({email:upemail}, {$inc:{"Protein.Chicken":upChicken, "Protein.Salmon":upSalmon, "Protein.Steak":upSteak, "Protein.Turkey":upTurkey, 
        "WildCards.Tripthechef":upTripChef, "WildCards.pushyouropponentsfoodoffthetable":uppushfood, "WildCards.Ramsaycomplementsyourfood":upcomplementsfood, "WildCards.Cookedtoperfection":upcookedtoperfection,
        "Vegetables.Sprouts":upSprouts, "Vegetables.Peas":upPeas, "Vegetables.Carrots":upCarrots, "Vegetables.Broccoli":upBroccoli,
        "Carbs.Patatoes":upPatatoes, "Carbs.Chips":upChips, "Carbs.Pasta":upPasta, "Carbs.Rice":upRice, "Modifiers.SaltAndPepper":upSaltandPepper, "Modifiers.Ketchup":upKetchup, "Modifiers.Gravy":upGravy, "Modifiers.Saffron":upSaffron}});
        res.json(orders);
    }catch(err){
        res.send('Error '+err)
    }
   
})

router.get(`/:id`, async(req, res) =>{
    const person = req.params.id;
    User.findOne({email:person}, (err, result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})
module.exports = router;

