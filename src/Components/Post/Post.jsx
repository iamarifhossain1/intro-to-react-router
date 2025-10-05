import { Link, useNavigate } from 'react-router';
import './Post.css'

const Post = ({post}) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }

    
    

    const {id, title} = post
    return (
        <div className='post-style'>
            <p>Title: {title}</p>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Show More Details: {id}</button>
        </div>
    );
};

export default Post;