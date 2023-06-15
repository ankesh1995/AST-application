
let express=require("express");
let hbs=require("hbs");
let rout=require("./controller")
let middleWare=express();
middleWare.use(express.urlencoded({extended:true}));
middleWare.use(express.json());
middleWare.use(express.text());
middleWare.use('/',rout )
middleWare.set("view-engine","hbs")

module.exports=middleWare;