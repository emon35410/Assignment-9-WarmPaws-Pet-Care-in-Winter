import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../assets/Logo shop.png"
import "./button.css"
import { AuthConntext } from '../layout/Provider/AuthProvider';
import { h2 } from 'framer-motion/client';
import userImg from "../assets/user.png"
import { toast } from 'react-toastify';


const Navbar = () => {
    const { user, logout } = use(AuthConntext)
    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success("Logout Succesfully")
            }).catch((error) => {
                console.log(error)
            });
    }
    const links = <>
        <li><NavLink className="font-semibold" to="/">Home</NavLink></li>
        <li><NavLink className="font-semibold" to="/services">Services</NavLink></li>
        <li><NavLink className="font-semibold" to="/profile">My Profile</NavLink></li>
    </>
    return (
        <nav className=''>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}

                        </ul>
                    </div>
                    <div className='w-20 ml-2 '>
                        <Link to="/">
                            <img className="rounded-3xl " src={logo} alt="WarmPaws Logo" />
                        </Link>
                    </div>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}

                    </ul>
                </div>
                <div className="navbar-end">
                    <img className='mr-2 w-15 h-15 rounded-full ' src={`${user?user.photoURL:userImg}`} alt="" />
                    {
                        user ? <Link to="/auth/login" onClick={handleLogout} className="btn">Logout</Link> : <Link to="/auth/login" className="btn">Login</Link>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;