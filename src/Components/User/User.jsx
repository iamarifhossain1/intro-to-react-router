import React from 'react';
import { useLoaderData } from 'react-router';
import UserSettings from '../UserSettings/UserSettings';

const User = () => {
    const users = useLoaderData();
    // console.log(users);
    
    return (
        <div>
            <h1>User Page</h1>
            <div>
                {
                    users.map(user => <UserSettings key={user.id} user={user}></UserSettings>)
                }
            </div>
        </div>
    );
};

export default User;