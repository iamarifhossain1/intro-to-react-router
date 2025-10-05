import { Link, Navigate } from 'react-router';
import './UserSettings.css'
import { Suspense, useState } from 'react';
import UserDetails2 from '../UserDetails2/UserDetails2';
const UserSettings = ({user}) => {
    const {id,name, email, phone} = user;
    const userDetails2Promise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json());
    const [showInfo, setShowInfo] = useState(false);
    const [vistiHome, setVisitHome] = useState(false);
    if (vistiHome) {
        return <Navigate to='/'></Navigate>
    }
    
    return (
        <div className='userSettingStyle'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading......</span>}><UserDetails2 userDetails2Promise={userDetails2Promise}></UserDetails2></Suspense>
            }
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default UserSettings;