import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    gender:{
        type: String,
        required: true,
        enum: ["Male","Female"]
    },
    profilePicture:{
        type: String,
        default: "",
    }
},{timestamps: true});


export const User=mongoose.model("User",userSchema);