import React from 'react'
import Conversation from './Conversation'
import {useGetConversations} from "../hooks/useGetConversations";
export default function Conversations() {
  const {loading,conversations}=useGetConversations();
  console.log("Conversations:",conversations);
  let arr=conversations.allUsers;
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {arr && arr.map((item,index)=>{
        return <Conversation 
        key={item._id}
        conversation={item}
        lastIdx={index===(arr.length-1)}
        />
      })}

      {loading? <span className='loading loading-spinner mx-auto'></span>:null}
    </div>
  )
}
