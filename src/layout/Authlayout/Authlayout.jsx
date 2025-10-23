import React from 'react';
import Navbar from '../../Component/Navbar';
import { Outlet } from 'react-router';

const Authlayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Authlayout;