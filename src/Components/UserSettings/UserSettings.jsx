import { Link } from 'react-router';
import './UserSettings.css'
const UserSettings = ({user}) => {
    const {id,name, email, phone} = user;
    
    return (
        <div className='userSettingStyle'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default UserSettings;