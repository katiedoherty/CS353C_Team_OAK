const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

//this is the schema (the information we want from our users)
const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },

    username:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Protein:{
       
        Chicken:{
            type:Number,
            
        },
        Salmon:{
            type:Number,
            
        },
        Turkey:{
            type:Number,
           
        },
        Steak:{
            type:Number,
           
        }
    },
        WildCards:{
       
            Tripthechef:{
                type:Number,
                
            },
            pushyouropponentsfoodoffthetable:{
                type:Number,
                
            },
            Ramsaycomplementsyourfood:{
                type:Number,
               
            },
            Cookedtoperfection:{
                type:Number,
               
            }
        },
            Vegetables:{
       
                Sprouts:{
                    type:Number,
                    
                },
               Peas:{
                    type:Number,
                    
                },
                Carrots:{
                    type:Number,
                   
                },
                Broccoli:{
                    type:Number,
                   
                }
            },
               Carbs:{
       
                    Patatoes:{
                        type:Number,
                        
                    },
                    Chips:{
                        type:Number,
                        
                    },
                    Pasta:{
                        type:Number,
                       
                    },
                    Rice:{
                        type:Number,
                       
                    }
                },
                    Modifiers:{
       
                        SaltAndPepper:{
                            type:Number,
                            
                        },
                        Ketchup:{
                            type:Number,
                            
                        },
                        Gravy:{
                            type:Number,
                           
                        },
                        Saffron:{
                            type:Number,
                           
                        }
   }

});

signUpTemplate.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY);
	return token;
};


const User = mongoose.model("user", signUpTemplate);

const validate = (data) =>{
    const schema = joi.object({
        fullName:joi.string().required().label("Full Name"),
        username:joi.string().required().label("Username"),
        email:joi.string().email().required().label("Email"),
        password:passwordComplexity.required().label("Password")
    })
    return schema.validate(data);
}

module.exports = { User, validate };
