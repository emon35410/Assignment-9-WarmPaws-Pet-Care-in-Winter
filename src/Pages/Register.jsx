import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthConntext } from '../layout/Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

const Register = () => {
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false); 
    const { createUser, SetUser, updateUser } = use(AuthConntext);

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        
        if (name.length < 5) {
            setNameError("Name should be more than 5 characters");
            return;
        } else {
            setNameError("");
        }

        
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        if (!uppercaseRegex.test(password)) {
            setPasswordError("Password must have at least 1 uppercase letter");
            return;
        } else if (!lowercaseRegex.test(password)) {
            setPasswordError("Password must have at least 1 lowercase letter");
            return;
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            return;
        } else {
            setPasswordError("");
        }

        console.log({ name, email, password, photo });

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        SetUser({ ...user, displayName: name, photoURL: photo });
                    })
                    .catch((error) => {
                        console.log(error);
                        SetUser(user);
                    });
                console.log(user);
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div className='flex justify-center items-center md:min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className='text-2xl font-semibold my-2 text-center'>Register Your Account</h1>
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="font-semibold">Your Name</label>
                        <input name='name' required type="text" className="input" placeholder="Enter Your Name" />
                        {nameError && <p className='text-red-600'>{nameError}</p>}

                        {/* Photo URL */}
                        <label className="font-semibold">Photo URL</label>
                        <input name='photo' required type="text" className="input" placeholder="Enter Your Photo URL" />

                        {/* Email */}
                        <label className="font-semibold">Email address</label>
                        <input name='email' required type="email" className="input" placeholder="Enter Your Email Address" />

                        {/* Password */}
                        <label className="font-semibold">Password</label>
                        <div className="relative">
                            <input
                                name='password'
                                required
                                type={showPassword ? "text" : "password"}
                                className="input pr-10"
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                className="absolute right-7 top-4 text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {passwordError && <p className='text-red-600'>{passwordError}</p>}

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='text-[#706F6F] text-center mt-2 font-semibold'>
                            Already Have an Account? <Link to="/auth/login" className='text-[#F75B5F]'>Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;
