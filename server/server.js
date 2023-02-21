import express from "express"
import {connection, corsOption} from "./Config/db.js"
import cors from "cors"
import tourRoute from "./Routes/tours.js"
import userRoute from "./Routes/user.js"
import authRoute from "./Routes/auth.js"
import reviewRoute from "./Routes/reviews.js"
import bookingRoute from "./Routes/booking.js"




const app = express()
app.use(express.json())
app.use(cors(corsOption))


app.use("/auth",authRoute)
app.use("/tours",tourRoute)
app.use("/user",userRoute)
app.use("/review", reviewRoute)
app.use("/booking", bookingRoute)



app.get("/",(req,res)=>{
    res.send("Hiii ")
})



//Connection 
app.listen(process.env.PORT || 8080,async(req,res)=>{
    try {
        await connection
        console.log("Connection to database successfull")
    } catch (error) {
        console.log("Connection failed")
        console.log(error)
    }
    console.log(`listening on port ${process.env.PORT}`)
})
