import React, { useEffect, useRef } from 'react';
import Message from './Message';
import { useGetMessages } from "../hooks/useGetMessages";
import MessageSkeleton from '../skeletons/MessageSkeleton';
export default function Messages() {
  const { messages, loading } = useGetMessages();
  // console.log("message: ",messages);
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
    },100);
  }, [messages]);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {/* <h1 className='text-white'> Hellooo</h1> */}


      {loading && (
        <>
          <MessageSkeleton />
          <MessageSkeleton />
          <MessageSkeleton />
        </>
      )}

      {!loading && !messages && (
        <p className='text-center text-white'> Send a message to start the conversation</p>
      )}

      {!loading && messages && messages.length > 0 && messages.map((message) => {
        {/* console.log(message); */ }

        return (
          <div key={message._id}
          ref={lastMessageRef}
           >
            <Message 
              message={message} />
          </div>
        )

      })}
    </div>
  )
}
