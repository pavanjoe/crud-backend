const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/studentRoute");
const cors= require("cors");
const bodyParser= require("body-parser");




mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://itspavanjoe:Valummel123@cluster0.x8vx2ho.mongodb.net/schooldb");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred while connecting with DB"));


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/studentRoute",studentRoute);


app.listen(4000,()=>{
    console.log("Server started at 4000");
})
