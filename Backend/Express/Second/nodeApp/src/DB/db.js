const mongoose = require("mongoose");

function connectToDB(){
    mongoose.connect("mongodb://localhost:27017/nodeApp")

    .then(()=>{
        console.log("connect to DB");
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connectToDB