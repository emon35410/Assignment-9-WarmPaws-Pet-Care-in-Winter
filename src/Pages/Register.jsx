import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center md:min-h-screen'>
            <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <form onSubmit="" className="card-body ">
                    <h1 className='text-2xl font-semibold my-2 text-center'>Register Your Account</h1>
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className=" font-semibold">Your Name</label>
                        <input name='name' required type="text" className="input" placeholder="Enter Your Name" />
                        {/* Photo URL */}
                        <label className=" font-semibold">Photo URL</label>
                        <input name='photo' required type="text" className="input" placeholder="Enter Your Photo URL" />
                        {/* Email */}
                        <label className=" font-semibold">Email address</label>
                        <input name='email' required type="email" className="input" placeholder="Enter Your Email Address" />
                        {/* Password */}
                        <label className="font-semibold">Password</label>
                        <input name='password' required type="password" className="input" placeholder="Password" />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='text-[#706F6F] text-center mt-2 font-semibold'>Already Have an Account ?<Link to="/auth/login" className='text-[#F75B5F]'>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;