import React from 'react';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import { Outlet } from 'react-router';
import Banner from '../../Component/Banner';

const Root = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
            <main>
                <Outlet></Outlet>
            </main>

            <Footer></Footer>

        </div>
    );
};

export default Root;