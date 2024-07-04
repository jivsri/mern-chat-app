import { useState } from "react"
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

export const useSendMessage=()=>{
    const [loading,setLoading]=useState(false);
    const {messages,setMessages,selectedConversation}=useConversation();

    const sendMessage=async(message)=>{
        setLoading(true);
        try {
            const res=await fetch(`/api/messages/send/${selectedConversation._id}`,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({message}),
            });

            const data=await res.json();
            console.log("data from the server:",data);
            if(!data.success){
                throw new Error(data.message);
            }

            // console.log("old: ",messages);
            // console.log(data)
            if(!messages) setMessages([data.newMessage]);
            else setMessages([...messages,data.newMessage]);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    return {loading,sendMessage};
}

