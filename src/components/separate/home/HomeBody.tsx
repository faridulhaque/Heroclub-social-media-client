import React from 'react';
import FeedContainer from './FeedContainer';
import HomeRight from './HomeRight';
import ProfileCard from './ProfileCard';

const HomeBody = () => {
    return (
        <div className="w-11/12 mx-auto mt-10 h-[90vh] xl:flex lg:flex md:block sm:block xs:block xxs:block justify-between">
            <ProfileCard></ProfileCard>
            <FeedContainer></FeedContainer>
            <HomeRight></HomeRight>
        </div>
    );
};

export default HomeBody;