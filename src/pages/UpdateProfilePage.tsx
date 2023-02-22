import React from 'react';
import UpdateProfileForm from '../components/separate/UpdateProfileForm';
import Navbar from '../components/shared/Navbar';

const UpdateProfilePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <UpdateProfileForm></UpdateProfileForm>
        </div>
    );
};

export default UpdateProfilePage;