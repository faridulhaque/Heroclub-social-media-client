import React from 'react';
import PostMaker from '../../reusable/PostMaker';
import PostPaper from '../../reusable/PostPaper';

const FeedContainer = () => {
    return (
        <div className="xl:w-[50%] lg::w-[50%] md::w-full sm::w-full xs::w-full xss:w-full h-full overflow-y-scroll xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10 xs:mt-10 xxs:mt-10">
            <PostMaker></PostMaker>
            <PostPaper></PostPaper>
            <PostPaper></PostPaper>
            <PostPaper></PostPaper>
            <PostPaper></PostPaper>
            <PostPaper></PostPaper>
            <PostPaper></PostPaper>
            <PostPaper></PostPaper>
        </div>
    );
};

export default FeedContainer;