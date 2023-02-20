import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    city:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    distance:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    maxGroupSize:{
        type:String,
        required:true,
    },

    reviews:[
        {
            type: mongoose.Types.ObjectId,
            ref: "Review"
        },
    ],

    featured:{
        type:Boolean,
        default:false,
    },

},{timestamps:true})

export default mongoose.model("Tour", tourSchema)