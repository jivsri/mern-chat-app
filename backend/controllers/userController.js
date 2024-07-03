import { User } from "../models/userModel.js";

export const getUsersForSidebar=async(req,res)=>{
    try {
        const loggedInUser=req.user._id;
        const allUsers=await User.find({}).select("-password");
        res.status(200).json({
            success: true,
            allUsers
        })
    } catch (error) {
        console.log("error detected",error);
        return res.status(500).json({
            success: false,
            message: "internal server error",
        });
    }   
}