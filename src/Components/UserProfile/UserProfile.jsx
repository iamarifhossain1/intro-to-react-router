import React, { use } from 'react';

const UserProfile = ({userPromise}) => {
    const userData = use(userPromise);
    console.log(userData);
    
    
    return (
        <div>
            <h1>User Profile</h1>
        </div>
    );
};

export default UserProfile;