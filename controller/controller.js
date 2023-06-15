const express = require('express')
const router = express.Router();
let userModel=require("../model/schema");
let bcrypt=require("bcrypt");
require('../DBconnection');

// Register user

router.get("/",(req,res)=>{
    res.render("register.hbs")
})


router.post("/register",async(req,res)=>{
    try{
let salt=bcrypt.genSaltSync(10);
let hash=bcrypt.hashSync(req.body.password,salt);
//   console.log(hash)
let data={
    name:req.body.name,
    age:req.body.age,
    mobile:req.body.mobile,
    email:req.body.email,
    password:hash
}

   let result= await userModel.create(data);
   if(result){
       res.redirect("/login")
   }else{
    res.status(500).send("internal server error..")
   }
}catch(err){
    throw err
}
})
// Login

router.get("/login",(req,res)=>{
    res.render("login.hbs")
})

router.post("/login",async(req,res)=>{
    let result= req.body
    let matched=await userModel.findOne({email:result.email,password:result.password})

    if(matched){
         res.send(`hello ${matched.name} you are login.... `)
    }
})

module.exports=router;
