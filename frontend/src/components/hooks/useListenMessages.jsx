import { useEffect } from "react";
import { useSocketContext } from "../../context/SocketContext"
import useConversation from "../../zustand/useConversation";
import notifSound from "../../assets/sounds/notif.mp3";
export const useListenMessages=()=>{
    const {socket}=useSocketContext();
    const {messages,setMessages}=useConversation();
    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            // console.log("message received: ",newMessage);
            // console.log("socket.id: ",socket?.id);
            // console.log("naya msg: ",newMessage);
            // console.log("old msgs: ",messages);
            newMessage.shouldShake=true;
            const sound=new Audio(notifSound);
            sound.play();
            setMessages([...messages,newMessage]);
        });

        return ()=> socket?.off("newMessage");
    },[socket,setMessages,messages]);
}