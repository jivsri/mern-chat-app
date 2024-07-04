import React, { useState } from 'react';
import {IoSearchSharp} from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import { useGetConversations } from '../hooks/useGetConversations';
import toast from 'react-hot-toast';
export default function SearchInput() {
  const [search,setSearch]=useState("");

  const {setSelectedConversation}=useConversation();
  const {conversations}=useGetConversations();

  const handleSubmit=(e)=>{

    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      setSearch("");
      return toast.error("Search term must be at least 3 characters long");
    }

    setSearch("");

    // console.log("type:",typeof(conversations));
    // console.log(conversations);
    const conversation=conversations.allUsers.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))
    // console.log(conversation);

    if(conversation){
      setSelectedConversation(conversation);
      // setConversations(conversation);
      setSearch("");
    }
    else{
      // setSearch("");
      toast.error("No such user Found");
    }
    


  }
  return (
    <form className='flex items-center gap-2 m-4'>
    <input type='text' placeholder='Search...'
        className='input input-bordered rounded-full'
        value={search}
        onChange={(e)=>{
          setSearch(e.target.value);
        }}
    />
    <button type='submit' className='btn btn-circle bg-sky-500 text-white'
    onClick={handleSubmit}>
    <IoSearchSharp size={20}/>
    </button>
      
    </form>
  )
}
