import { useEffect, useState } from "react"
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

export const useGetMessages=()=>{

    const [loading,setLoading] = useState(false);

    const {messages,setMessages,selectedConversation}=useConversation();

    useEffect(()=>{

        const getMessages=async()=>{
            setLoading(true);
            try {
                const res=await fetch(`/api/messages/${selectedConversation._id}`);
                const data=await res.json();
                console.log("data from server: ",data);
                setMessages(data.messages);
                if(!data.success){
                    throw new Error(data.message);
                }
            } catch (error) {
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        }

        if(selectedConversation?._id) getMessages();
    },[selectedConversation?._id,setMessages]);

    return {messages,loading};
}