import React from 'react';
import {IoSearchSharp} from "react-icons/io5";

export default function SearchInput() {
  return (
    <form className='flex items-center gap-2 m-4'>
    <input type='text' placeholder='Search...'
        className='input input-bordered rounded-full'
    />
    <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
    <IoSearchSharp size={20}/>
    </button>
      
    </form>
  )
}
