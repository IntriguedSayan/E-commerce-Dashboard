const express = require('express')
const cors = require("cors");
const { connectionToDB } = require('./src/config/ConnectDB.config');
const { customerDataRouter } = require('./src/routes/CustomerData.routes');
require('dotenv').config();


const app = express();



const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json({limit:"50mb"}));

app.use("/customer-data",customerDataRouter);
app.get("/",(req,res)=>{
    return res.json({msg:"Welcome to E-commerce Dashboard"});
})


app.use("*",(req,res)=>{
    return res.json({msg:"You have entered wrong path"});
})

app.listen(PORT,async()=>{
    try{
        await connectionToDB;
        console.log(`DB connected successfully. Server running on port ${PORT}`);
    }catch(err){
        console.log("connection failed");
        console.log(err.message);
    }
})


