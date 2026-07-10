const express = require("express")
const app = express();
const connectToDB = require("./src/DB/db");
const router = require("./src/routes/notes.routes")

app.use (express.json());

connectToDB()
app.use("/",router)
app.listen(3000,()=>{
    console.log("Listening to Port 3000");
})