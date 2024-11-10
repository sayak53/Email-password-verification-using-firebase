import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-4xl'>Welcome to Our website Login or register Now</h2>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;