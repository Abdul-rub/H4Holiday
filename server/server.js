import express from "express"
import {connection} from "./Config/db.js"
import cookieParser from "cookie-parser";
import mongoose from "mongoose"
import cors from "cors"




const app = express()
app.use(express.json())
app.use(cors())



app.get("/",(req,res)=>{
    res.send("Hiii ")
})



//Connection 
app.listen(process.env.PORT || 8080,async(req,res)=>{
    try {
        await connection
        console.log("Connection to database successfu;;")
    } catch (error) {
        console.log("Connection failed")
        console.log(error)
    }
    console.log(`listening on port ${process.env.PORT}`)
})
