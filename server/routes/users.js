
const router = require("express").Router();
const { User, validate } = require("../models/SignUpModels");
const bcrypt = require("bcrypt");


//this grabs the information that the user entered and changes the schema inputs so that data is ent to the mongodb database

router.post("/", async (req, res) => {
 const signedUpUser = new User({
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
		Protein:{
			Chicken:0,
			Salmon:0,
			Turkey:0,
			Steak:0
		},
		Carbs:{
			Chips:0,
			Pasta:0,
			Patatoes:0,
			Rice:0
		},
		Modifiers:{
			Gravy:0,
			Ketchup:0,
			Saffron:0,
			SaltAndPepper:0

		},
		Vegetables:{
			Broccoli:0,
			Carrots:0,
			Peas:0,
			Sprouts:0
		},
		WildCards:{
			Tripthechef:0,
            pushyouropponentsfoodoffthetable:0,
            Ramsaycomplementsyourfood:0,
            Cookedtoperfection:0
		}

    })
	
	try{
		
		const user = await User.findOne({ email: signedUpUser.email });
		const username = await User.findOne({ username: signedUpUser.username });
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		string =signedUpUser.password;
			var isuppercase =false
			var islowercase = false
			var isnumber =false;
			var i=0;

			while (i < string.length)
		{
			if (string.charAt(i) == string.charAt(i).toUpperCase()) {
			isuppercase=true
		
		}
		if (string.charAt(i) == string.charAt(i).toLowerCase()) {
			islowercase=true
		
		}
		if (!isNaN(string.charAt(i) * 1)){
			isnumber=true;
		}
		i++
	
	
	}
	

		if (user){
			return res.status(409).send({ message: "User with given email already Exist!" });
		}
		else if(!(re.test(signedUpUser.email))){
			return res.status(401).send({ message: "email entered is missing an @ or ." });
		}
		else if(signedUpUser.fullName.length<4){
			return res.status(401).send({ message: "Name must be more then 4 characters" });
		}
		else if(signedUpUser.username.length<4){
			return res.status(405).send({ message: "Username must be more then 4 characters" });
		}
		else if (username){
			return res.status(409).send({ message: "User with given username already Exist!" });
		}
		else if(signedUpUser.password.length<8){
			return res.status(410).send({ message: "Password is too short, please enter 8 characters" });
		}
		
		else if(!isuppercase){
			return res.status(404).send({ message: "Password needs at least one capital letter" });
		}
		else if(!islowercase){
			return res.status(403).send({ message: "Password needs at least one lowercase letter" });
		}
		else if(!isnumber){
			return res.status(402).send({ message: "Password needs at least one number" });
		}
		
		
		else{
			const salt = await bcrypt.genSalt(Number(process.env.SALT));
			const hashPassword = await bcrypt.hash(signedUpUser.password, salt);
			
			signedUpUser.password=hashPassword;
		
			const a1 = await signedUpUser.save();
			
			res.json(a1);
			console.log(a1);
		}
		
		
    }catch(err){
        res.send('Error'+err);
    }
   
});
module.exports = router;
