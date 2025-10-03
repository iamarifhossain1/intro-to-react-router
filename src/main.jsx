import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobile from './Components/Mobile/Mobile.jsx';
import Laptop from './Components/Laptop/Laptop.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'Mobile', Component: Mobile},
      {path: 'Laptop', Component: Laptop}
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
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
