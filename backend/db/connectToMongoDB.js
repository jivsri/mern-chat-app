import mongoose from "mongoose";

export const connectToDB=()=>{
    try {
        mongoose.connect(process.env.MONGO_DB_URI,{
            dbName: "chat-app-db",
        }).then(()=>{
            console.log("Database Connected");
        })
    } catch (error) {
        console.log("Error Detected",error);
    }
}