import React, { useState } from 'react'
import GenderCheckbox from '../../components/GenderCheckbox'
import { NavLink } from 'react-router-dom'
import {useSignUp} from '../../components/hooks/useSignUp';

export default function Signup() {
    const [inputs, setInputs] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const {loading,signup}=useSignUp();

    const handleCheckBoxChange = (gender) => {
        setInputs({ ...inputs, gender: gender });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setInputs({
            fullName: "",
            userName: "",
            password: "",
            confirmPassword: "",
            gender: "",
        });
        await signup(inputs);
    }
    return (
        <div className='flex flex-col items-center justify-center w-96'>
            <div className='w-full p-6  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100
flex flex-col '>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    SignUp <span className='text-blue-400'>ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label p-2">
                                <span className=" text--base label-text text-white">FullName</span>
                            </div>
                            <input type="text" placeholder="Enter FullName" className="input input-bordered w-full h-10"
                                value={inputs.fullName}
                                onChange={(e) => {
                                    setInputs({ ...inputs, fullName: e.target.value });
                                }} />
                        </label>
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs ">
                            <div className="label p-2">
                                <span className=" text--base label-text text-white">UserName</span>
                            </div>
                            <input type="text" placeholder="Enter UserName" className="input input-bordered w-full h-10"
                                value={inputs.userName}
                                onChange={(e) => {
                                    setInputs({ ...inputs, userName: e.target.value });
                                }}
                            />
                        </label>
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs ">
                            <div className="label p-2">
                                <span className=" text--base label-text text-white">Password</span>
                            </div>
                            <input type="password" placeholder="Enter Password" className="input input-bordered w-full h-10"
                                value={inputs.password}
                                onChange={(e) => {
                                    setInputs({ ...inputs, password: e.target.value });
                                }}
                            />
                        </label>
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs ">
                            <div className="label p-2">
                                <span className=" text--base label-text text-white">Confirm Password</span>
                            </div>
                            <input type="password" placeholder="Re-Enter Password" className="input input-bordered w-full h-10"
                                value={inputs.confirmPassword}
                                onChange={(e) => {
                                    setInputs({ ...inputs, confirmPassword: e.target.value });
                                }}
                            />
                        </label>
                    </div>

                    {/* gender checkbox */}

                    <GenderCheckbox onCheckboxChange={handleCheckBoxChange}
                        selectedGender={inputs.gender}
                    />


                    <NavLink to='/login' className='text-sm text-white hover:text-gray-400 mt-2 inline-block'>
                        Already Have an Account?
                    </NavLink>

                    <div>
                        <button className='btn btn-block btn-outline text-white btn-neutral btn-sm mt-2' disabled={loading}>
                        {loading?( <span className='loading loading-spinner'></span>):"SignUp"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
