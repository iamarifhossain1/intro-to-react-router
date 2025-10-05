import React, { use } from 'react';

const UserDetails2 = ({userDetails2Promise}) => {

   const {name, username} = use(userDetails2Promise);

    return (
        <div>
           <p>Name: {name}</p>
           <p>Username: {username}</p>
        </div>
    );
};

export default UserDetails2;