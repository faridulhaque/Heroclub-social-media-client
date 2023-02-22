import React from 'react';
import HomeBody from '../components/separate/home/HomeBody';
import Navbar from '../components/shared/Navbar';

const HomePage = () => {
    return (
        <div className="h-screen">
         <Navbar></Navbar> 
         <HomeBody></HomeBody>

        </div>
    );
};

export default HomePage;