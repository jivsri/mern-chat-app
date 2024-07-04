import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import {useLogin} from "../../components/hooks/useLogin";
export default function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const {loading,login}=useLogin();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await login(username,password);
        setPassword("");
        setUsername("");
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className=' w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-blue-300'>ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label p-2">
                            <span className=" text--base label-text text-white">UserName</span>
                        </div>
                        <input type="text" placeholder="Enter Username" className="input input-bordered w-full h-10"
                        value={username} 
                        onChange={(e)=>{
                                setUsername(e.target.value);
                            }}
                        />
                    </label>
                    </div>

                    <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label p-2">
                            <span className=" text--base label-text text-white">Password</span>
                        </div>
                        <input type="password" placeholder="Enter Password" className="input input-bordered w-full h-10" 
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                        />
                    </label>
                    </div>

                    <NavLink to='/signup' className='text-sm  hover:text-gray-400 mt-2 inline-block text-white'>
                        Don't Have an Account?
                    </NavLink>

                    <button className='btn btn-block btn-outline text-white btn-neutral btn-sm mt-2' disabled={loading}>
                        {loading?( <span className='loading loading-spinner'></span>):"Login"}
                        </button>
                </form>
            </div>
        </div>
    )
}
