import React from 'react';
import UpdateProfileForm from '../components/separate/UpdateProfileForm';
import BelowSpace from '../components/shared/BelowSpace';
import Navbar from '../components/shared/Navbar';

const UpdateProfilePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <UpdateProfileForm></UpdateProfileForm>
            <BelowSpace></BelowSpace>
        </div>
    );
};

export default UpdateProfilePage;