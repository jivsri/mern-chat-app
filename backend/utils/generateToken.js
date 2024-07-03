import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({id: userId},process.env.JWT_SECRET);
    return res.cookie("token",token,{
        httpOnly: true,
        maxAge: 15*24*60*60*1000,
        sameSite: "strict",
        secure: process.env.MODE_ENV!=="Development"
    });
}