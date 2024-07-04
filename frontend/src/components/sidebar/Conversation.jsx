import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

export default function Conversation({conversation,lastIdx}) {
    const {selectedConversation,setSelectedConversation}=useConversation();
    const isSelected=selectedConversation?._id===conversation._id;

    const {onlineUsers}=useSocketContext();
    const isOnline=onlineUsers.includes(conversation._id);
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-blue-400 rounded p-2 py-1 cursor-pointer
            ${isSelected? "bg-sky-500":""}`}
            onClick={()=>{
                setSelectedConversation(conversation);
            }}>
                <div className={`avatar ${isOnline?"online":""}`}>
                    <div className='w-12 rounded-full'>
                    <img src={conversation.profilePicture} />
                        

                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between '>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                        <span className='text-xl'></span>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className='divider h-10 m-2'></div>}

        </>
    )
}
