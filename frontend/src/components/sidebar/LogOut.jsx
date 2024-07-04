import React from 'react'
import {BiLogOut} from "react-icons/bi";
import { useLogOut } from '../hooks/useLogOut';
export default function LogOut() {
  const {loading,logout}=useLogOut();
  return (
    <div className='mt-auto'>
    {!loading? (<BiLogOut color='white' size={24}
      onClick={logout} className='hover:cursor-pointer'/>):
      (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}
