import { Link } from 'react-router';
import './Post.css'

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div className='post-style'>
            <p>Title: {title}</p>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;