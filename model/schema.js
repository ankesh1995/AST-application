let mongoose=require("mongoose");
let userSchema= new mongoose.Schema({
     name:{
         required:true,
         type:String,
     },
    age:{
        required:true,
        type:Number,
    },
    mobile:{
        required:true,
        type:Number,
    },
    email:{
        required:true,
        type:String,
    },
    password:{
        required:true,
        type:String,
    },
    // timestamps: true
    time:{
       type : Date,
       default: Date.now(),
    }
    
})

let userModel=mongoose.model("USER_DATA",userSchema,"USER_DATA");
module.exports=userModel;