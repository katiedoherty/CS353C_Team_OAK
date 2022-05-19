
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
		if (user){
			return res.status(409).send({ message: "User with given email already Exist!" });
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
   
	/*try {
		const { error } = validate(req.body);
		console.log(error);
		if (error){
			return res.status(400).send({ message: error.details[0].message });
		}
		else{
			const user = await User.findOne({ email: req.body.email });
			console.log(user);
			if (user)
			return res.status(409).send({ message: "User with given email already Exist!" });
		}

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);
console.log(hashPassword);
		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" }+ error);
	}*/
});
module.exports = router;
