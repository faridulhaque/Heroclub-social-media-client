import React from 'react';
import FeedContainer from '../home/FeedContainer';
import HomeRight from '../home/HomeRight';
import ProfileInfo from './ProfileInfo';

const ProfileBody = () => {
    return (
        <div className="w-11/12 mx-auto mt-10 h-[90vh] flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col justify-between">
            <ProfileInfo></ProfileInfo>
            <FeedContainer></FeedContainer>
            <HomeRight></HomeRight>
        </div>
    );
};

export default ProfileBody;