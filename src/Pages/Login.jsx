import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthConntext } from '../layout/Provider/AuthProvider';

const Login = () => {
    const { login } = use(AuthConntext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email,password)
            .then((result) => {
                const user = result.user;
                console.log(user)
            
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });

    }
    return (
        <div className='flex justify-center items-center md:min-h-screen'>
            <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <div className="card-body ">
                    <h1 className='text-2xl font-semibold my-2 text-center'>Login Your Account</h1>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            {/* Email */}
                            <label className=" font-semibold">Email Address</label>
                            <input required name='email' type="email" className="input" placeholder="Enter Your Email Address" />
                            {/* Password */}
                            <label className="font-semibold">Password</label>
                            <input required name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            {
                                <p className='text-red-600'>{ }</p>
                            }
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                            <p className='text-[#706F6F] text-center mt-2 font-semibold'>Dont’t Have An Account ?<Link to="/auth/register" className='text-[#F75B5F]'>Register</Link></p>
                        </fieldset>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;