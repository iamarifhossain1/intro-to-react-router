import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobile from './Components/Mobile/Mobile.jsx';
import Laptop from './Components/Laptop/Laptop.jsx';
import User from './Components/User/User.jsx';
import UserProfile from './Components/UserProfile/UserProfile.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDeatails from './Components/PostDetails/PostDeatails.jsx';

const loadUser = async () => { 
  const fetchUser = await fetch('https://jsonplaceholder.typicode.com/users');
  const response = await fetchUser.json();
  return response;
}

 const userPromise = loadUser();

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'Mobile', Component: Mobile},
      {path: 'Laptop', Component: Laptop},
      {path: 'User', loader: () => fetch('https://jsonplaceholder.typicode.com/users'), Component: User},
      {path: 'UserProfile',element: <Suspense fallback={<span>Loading.....</span>}><UserProfile userPromise={userPromise}></UserProfile></Suspense>},
      {path: 'user/:userId', loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`), Component: UserDetails},
      {path: 'posts', loader: () => fetch('https://jsonplaceholder.typicode.com/posts'), Component: Posts },
      {path: 'posts/:postId', loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`), Component: PostDeatails}

    ]
  },

  {
    path: 'home',
    element: <div>Home</div>
  },

  {
    path: 'profile',
    element: <div>Profile</div>
  },

  {
    path: 'about',
    element: <div>About Me</div>
  },

  {
    path: 'app',
    Component: App
  },

  {
    path: '*', 
    element: <h3>404 Not Found !</h3>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
