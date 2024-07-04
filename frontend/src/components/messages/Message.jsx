import React from 'react'
import {useAuthContext} from "../../context/AuthContext";
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../utils/extractTime';
export default function Message({message}) {

    const {authUser}=useAuthContext();
    const {selectedConversation}=useConversation();
    const fromMe=message.senderId===authUser.user._id;
    const chatClassName=fromMe?"chat chat-end":"chat chat-start";
    const profilePicture=fromMe?authUser.user.profilePicture:selectedConversation.profilePicture;
    const bgColor=fromMe?"bg-blue-500":"";

    const formattedTime=extractTime(message.createdAt);
    const shakeClass=message.shouldShake?"shake":"";
    // console.log("msgsender:",message.senderId);
    // console.log("loggedin user:",authUser.user._id);
    // console.log("fromme:",fromMe);

    return (
        <>
            <div className={`${chatClassName} text-white`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={profilePicture} />
                    </div>
                </div>
                <div className={`chat-bubble text-white ${bgColor} ${shakeClass} `}>{message.message}</div>
                <div className="chat-footer opacity-50 text-xs">{formattedTime}</div>
            </div>

        </>
    )
}
