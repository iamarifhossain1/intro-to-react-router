import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user);

    const params = useParams();
    console.log(params);
    
    
    return (
        <div>
            <h1>User Details</h1>

        </div>
    );
};

export default UserDetails;