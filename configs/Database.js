const mongoose = require('mongoose')
require('dotenv').config()
const DataBaseConnect = async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase Connect...");
    } catch (error) {
        console.log("Error in DataBase Config", error.message)
    }
}

module.exports = {DataBaseConnect}