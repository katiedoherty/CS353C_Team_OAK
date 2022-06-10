const express = require('express');
const mongoose= require('mongoose');
//const { default: mongoose } = require('mongoose');
//const MongoClient = require('mongodb').MongoClient
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();
const dotenv = require('dotenv');
dotenv.config()
//const PORT = process.env.PORT|| 8080;

const routes = require('./routes/api');
const routeULs=require("./routes/users");
const authRoutes = require("./routes/auth");
const usercardsRoutes = require("./routes/usercards");

//const MONGODB_URI = 'mongodb+srv://oakcard:oakcard123@oakcard.3hild.mongodb.net/FoodCards?retryWrites=true&w=majority'mongoose.connect(MONGODB_URI ||'mongodb://localhost/my-app',{
   // useNewUrlParser:true,
   // useUnifiedTopology:true
//}

//);



mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("database connected"));



//Data parsing
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:false}));

//HTTP request logger
app.use(morgan('tiny'));
app.use('/api',routes);
app.use("/api/users", routeULs);
app.use("/api/auth", authRoutes);
app.use("/api/usercards", usercardsRoutes);



app.listen(8080, () => console.log("server is up and running"));