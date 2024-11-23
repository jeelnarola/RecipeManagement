
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
require('dotenv').config({path:'../.env'})
const generateTokenAndCookieSet = async(userId,res)=>{
    try {
        const Token = await jwt.sing({userId},process.env.JWT_SECRET,{expiresIn:'15d'})
        res.status(201).cookie("jwt-RecipeManagement",Token,{
            maxAge:15 * 24 * 60 * 60 * 1000, // 15 days in MS
            httpOnly:true,
            sameSite:"strict"
        })
    } catch (error) {
        console.log("Error in generateTokenAndCookieSet Utils", error.message)
        res.status(500).json({success:false,message:"Interna; Server Error"})
    }
}

module.exports = generateTokenAndCookieSet