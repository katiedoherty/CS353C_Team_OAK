const express = require('express');

const router = express.Router();

const foodcards = require('../models/cardPost');
//Routes
router.get('/',(req,res)=>{
    //    const data={
    //        username: 'accimeesterlin',
    //        age:5
    //    };
    
    foodcards.find({})
      .then ( (data) =>{
           console.log('Data: ',data);
           res.json(data);
      })
      .catch( (error)=>{
          console.log('Data: ',daerrorta);
      }
    
      );
    
       
    });
    
    router.get('/name',(req,res) =>{
        const data ={
            username: 'peterson',
            age:5
        };
        res.json(data);
    });
    

    module.exports = router;