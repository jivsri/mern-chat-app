import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import { connectToDB } from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";


const port=5000 || process.env.PORT;
const app=express();


dotenv.config();

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);




// app.get("/",(req,res)=>{
//     res.send("Noice working1");
// });




app.listen(port,()=>{
    connectToDB();
    console.log(`server connected at ${port}`);
})