import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const signupController=async (req,res,next)=>{
    try {
        const {fullName,userName,password,confirmPassword,gender}=req.body;
        if(password!=confirmPassword){
            return res.status(400).json({
                success: false,
                message: "Password do not match",
            });
        }

        const user=await User.findOne({userName});
        if(user){
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        //hash password
        const hashedPassword=await bcrypt.hash(password,10);

        // https://avatar.iran.liara.run/public/boy
        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const userId=await User.create({
            fullName: fullName,
            userName: userName,
            password: hashedPassword,
            gender: gender,
            profilePicture: (gender==="male")? boyProfilePic: girlProfilePic
        });

        generateTokenAndSetCookie(userId._id,res);

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user: userId,
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


export const loginController=async(req,res,next)=>{
    try {
        const {userName,password}=req.body;
        console.log("received: ",{userName,password});
        let user=await User.findOne({userName});
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User doesnot exist. Sign Up First",
            });
        }

        let checkPassword=await bcrypt.compare(password,user.password);
        if(!checkPassword){
            return res.status(400).json({
                success: false,
                message: "Invalid Username or Password",
            });
        }

        generateTokenAndSetCookie(user._id,res);
        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error",
        });
    }
}


export const logoutController=(req,res,next)=>{
    try {
        return res.cookie("token",null,{
            maxAge: 0,
            httpOnly: true,
        }).status(200).json({
            success: true,
            message: "User logged out successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
