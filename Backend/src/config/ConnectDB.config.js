const mongoose = require("mongoose");

require("dotenv").config();

const connectionToDB = mongoose.connect(process.env.MONGO_URL,{ 
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS:45000,
    maxPoolSize: 15
})

module.exports = { connectionToDB };
