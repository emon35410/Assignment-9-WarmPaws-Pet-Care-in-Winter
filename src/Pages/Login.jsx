import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { AuthConntext } from '../layout/Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import { toast } from 'react-toastify';


const googleProvider = new GoogleAuthProvider()
const Login = () => {
    const { login, SetUser } = useContext(AuthConntext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
            .then((result) => {
                const user = result.user;
                console.log("Logged in user:", user);
                navigate(location.state?.from || "/");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log("Google user:", user);
                SetUser(user);
                toast.success("Sign in successfully!");
                navigate( "/");
            })
            .catch((error) => {
                toast.error(error.message);
                setError(error.message);
            });
    };


    return (
        <div className='flex justify-center items-center md:min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
                <div className="card-body">
                    <h1 className='text-2xl font-semibold my-2 text-center'>
                        Login Your Account
                    </h1>


                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset space-y-2">
                            {/* Email */}
                            <label className="font-semibold">Email Address</label>
                            <input
                                required
                                name='email'
                                type="email"
                                className="input w-full"
                                placeholder="Enter Your Email Address"
                            />

                            {/* Password */}
                            <label className="font-semibold">Password</label>
                            <div className="relative">
                                <input
                                    required
                                    name='password'
                                    type={showPassword ? "text" : "password"}
                                    className="input w-full pr-10"
                                    placeholder="Password"
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 cursor-pointer text-gray-500"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            <div>
                                <a className="link link-hover text-sm">Forgot password?</a>
                            </div>


                            {error && <p className='text-red-600 text-sm'>{error}</p>}


                            <button type='submit' className="btn btn-neutral mt-4 w-full">
                                Login
                            </button>

                            <p className='text-[#706F6F] text-center mt-2 font-semibold'>
                                Don’t Have An Account?{" "}
                                <Link to="/auth/register" className='text-[#F75B5F]'>
                                    Register
                                </Link>
                            </p>
                        </fieldset>
                    </form>

                    {/* Google Login */}
                    <div className='space-y-3 mt-3'>
                        <button onClick={handleGoogleSignIn} className='btn w-full btn-outline btn-primary flex items-center justify-center gap-2 text-sm sm:text-base'>
                            <FcGoogle size={20} />
                            <span>Login with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
