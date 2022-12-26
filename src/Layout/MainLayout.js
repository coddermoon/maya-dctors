import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';

const MainLayout = () => {
    return (
        <div >
            <Navbar/>
            <div className='min-h-[65vh]'>
            <Outlet  />
            </div>
           
            <Footer/>
        </div>
    );
};

export default MainLayout;