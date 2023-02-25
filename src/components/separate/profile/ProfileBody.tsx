import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSpecificUserQuery } from '../../../api/queries/usersApi';
import Loading from '../../shared/Loading';
import FeedContainer from '../home/FeedContainer';
import HomeRight from '../home/HomeRight';
import ProfileInfo from './ProfileInfo';

const ProfileBody = () => {

    const {id} = useParams()

    const {
        isLoading: userLoading,
        isError: isUserError,
        error: userError,
        data: user,
      } = useGetSpecificUserQuery<any>(id);
    
      if (userLoading) {
        return <Loading></Loading>;
      }
    
      if (isUserError) {
        console.log(userError);
    
      }

    return (
        <div className="w-11/12 mx-auto mt-10 h-[85vh] flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col justify-between">
            <ProfileInfo user={user}></ProfileInfo>
            <FeedContainer user={user}></FeedContainer>
            <HomeRight></HomeRight>
        </div>
    );
};

export default ProfileBody;