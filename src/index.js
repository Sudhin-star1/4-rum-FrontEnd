import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from './components/login/Login';
import UserProfile from './components/user/UserProfile';
import CommentSection from './components/comment/Comment';
import Search from './components/search/search';

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
