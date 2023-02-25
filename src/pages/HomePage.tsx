import React from 'react';
import HomeBody from '../components/separate/home/HomeBody';
import BelowSpace from '../components/shared/BelowSpace';
import Navbar from '../components/shared/Navbar';

const HomePage = () => {
    return (
        <div className="h-screen">
         <Navbar></Navbar> 
         <HomeBody></HomeBody>
         {/* <BelowSpace></BelowSpace> */}

        </div>
    );
};

export default HomePage;