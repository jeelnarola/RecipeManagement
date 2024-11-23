const express = require('express')
const cookie = require('cookie-parser')
const { DataBaseConnect } = require('./configs/Database')
const AuthRouter = require('./routers/Auth/auth.routers')
require('dotenv').config({path:"../.env"})
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookie())

app.use('/api/auth',AuthRouter)

app.listen(process.env.PORT,()=>{
    console.log("Server Start :- ",process.env.PORT)
    DataBaseConnect()
})