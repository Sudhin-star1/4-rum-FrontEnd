import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from './components/login/Login';
import UserProfile from './components/user/UserProfile';
import CommentSection from './components/comment/Comment';
import Search from './components/search/search';
import Register from './components/login/register';
import Upload from './components/upload/upload';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/upload",
    element: <Upload />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/user-profile",
    element: <UserProfile />
  },
  {
    path: "/comments-and-discussions",
    element: <CommentSection />
  },
  {
    path:"/search",
    element: <Search />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
