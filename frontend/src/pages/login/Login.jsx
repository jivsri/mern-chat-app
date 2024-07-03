import React from 'react'

export default function Login() {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className=' w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-blue-300'>ChatApp</span>
                </h1>
                <form>
                    <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label p-2">
                            <span className=" text--base label-text text-white">UserName</span>
                        </div>
                        <input type="text" placeholder="Enter Username" className="input input-bordered w-full h-10" />
                    </label>
                    </div>

                    <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label p-2">
                            <span className=" text--base label-text text-white">Password</span>
                        </div>
                        <input type="password" placeholder="Enter Password" className="input input-bordered w-full h-10" />
                    </label>
                    </div>

                    <a href='#' className='text-sm  hover:text-gray-400 mt-2 inline-block text-white'>
                        Don't Have an Account?
                    </a>

                    <div>
                        <button className='btn btn-block btn-outline btn-neutral btn-sm mt-2 text-white'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
