import React from 'react';
import PostMaker from '../../reusable/PostMaker';

const FeedContainer = () => {
    return (
        <div className="xl:block lg:block md:hidden sm:hidden xs:hidden xxs:hidden w-[50%] h-full scroll">
            <PostMaker></PostMaker>
        </div>
    );
};

export default FeedContainer;