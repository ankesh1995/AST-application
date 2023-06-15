const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const db = "mongodb+srv://ankesh:ankesh123@cluster0.zdqcgei.mongodb.net/CURD_DB?retryWrites=true&w=majority"
let dbb=mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))
    module.exports=dbb