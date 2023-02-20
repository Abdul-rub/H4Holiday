import mongoose from "mongoose"
import dotenv from "dotenv"
mongoose.set('strictQuery', false)
dotenv.config()

export  const connection = mongoose.connect(process.env.MONGO_URL);

