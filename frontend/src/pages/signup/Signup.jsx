import React from 'react'
import GenderCheckbox from '../../components/GenderCheckbox'

export default function Signup() {
    return (
        <div className='flex flex-col items-center justify-center w-96'>
            <div className='w-full p-6  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100
flex flex-col '>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    SignUp <span className='text-blue-400'>ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label p-2">
                                <span className=" text--base label-text text-white">FullName</span>
                            </div>
                            <input type="text" placeholder="Enter FullName" className="input input-bordered w-full h-10" />
                        </label>
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs ">
                            <div className="label p-2">
                                <span className=" text--base label-text text-white">UserName</span>
                            </div>
                            <input type="text" placeholder="Enter UserName" className="input input-bordered w-full h-10" />
                        </label>
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs ">
                            <div className="label p-2">
                                <span className=" text--base label-text text-white">Password</span>
                            </div>
                            <input type="password" placeholder="Enter Password" className="input input-bordered w-full h-10" />
                        </label>
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs ">
                            <div className="label p-2">
                                <span className=" text--base label-text text-white">Confirm Password</span>
                            </div>
                            <input type="password" placeholder="Re-Enter Password" className="input input-bordered w-full h-10" />
                        </label>
                    </div>

                    {/* gender checkbox */}

                    <GenderCheckbox />


                    <a href='#' className='text-sm text-white hover:text-gray-400 mt-2 inline-block'>
                        Already Have an Account?
                    </a>

                    <div>
                        <button className='btn btn-block btn-outline text-white btn-neutral btn-sm mt-2'>SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
