import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

export const sendMessage=async(req,res)=>{
    try {
        const {message}=req.body;
        const {id}=req.params;
        const receiverId=id;
        const senderId=req.user._id;
        let conversation=await Conversation.findOne({
            participants: {$all: [senderId,id]},
        });

        if(!conversation){
            conversation=await Conversation.create({
                participants: [senderId,id],
            });
        }

        const newMessage=await Message.create({
            senderId: senderId,
            receiverId: receiverId,
            message: message,
        });

        conversation.messages.push(newMessage._id);
        // await conversation.save();
        // await newMessage.save();

        // they will run in parallel
        await Promise.all([conversation.save(),newMessage.save()]);

        return res.status(200).json({
            success: true,
            message: "message created",
            conversation,
            newMessage,
        })
    } catch (error) {
        console.log("error detected",error);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        });
    }
}

export const getMessage=async(req,res)=>{
    try {
        const {id}=req.params;
        const senderId=req.user._id;

        const conversation=await Conversation.findOne({
            participants: {$all: [senderId,id]},
        }).populate("messages");

        if(!conversation){
            return res.status(400).json({
                success: true,
                messages: [],
            });
        }

        
        return res.status(200).json({
            success: true,
            messages: conversation.messages,
        });

        

    } catch (error) {
        console.log("error detected",error);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        });
    }
}

