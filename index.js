
let app=require("./controller/middleware");
// let hbs=require("hbs")
require("./DBconnection");
let countroller=require("./controller/controller")
let bcrypt=require("bcrypt")
app.use("/ast",countroller)

app.listen("3000",console.log("start server......3000"));