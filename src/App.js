import { React, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, useNavigate } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set the user's login status\
  const [allPosts, setAllPosts] = useState([])
  const navigate = useNavigate();

  const handleUpload = () => {
    if (isLoggedIn) {
      navigate("/upload"); // Redirect to the Upload page if logged in
    } else {
      navigate("/login"); // Redirect to the Sign In page if not logged in
    }
  };

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Post Title 1",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  //   },
  //   {
  //     id: 2,
  //     title: "Post Title 2",
  //     description: "Nullam nec libero nec urna mattis congue eu at purus...",
  //   },
  //   // Add more posts as needed
  // ];

  const posts = async() =>{
    const response = await fetch(`http::/localhost:5050/posts`);
    const allPosts = await response.json();
    setAllPosts(allPosts);
  } 
  return (
    <div>
      <div>
        {/* Navbar */}
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <ul className="flex text-white space-x-6">
              <li className="hover:underline cursor-pointer">
                <Link to="/home">Home</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/search">Search</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="#">Contact</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/comments-and-discussions">Discussions</Link>
              </li>
              {/* Add other navbar items here */}
            </ul>

            {/* Profile or Sign In button */}
            <div className="ml-auto">
              {isLoggedIn ? (
                <Link to="/user-profile" className="hover:underline text-white">
                  Profile
                </Link>
              ) : (
                <Link to="/login" className="hover:underline text-white">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 text-white">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Resource Sharing App
          </h1>
          <p className="text-xl">
            Share and discover resources, notes, and on-campus news with ease.
          </p>
        </div>
      </section>

      {/* Posts */}
      <div className="mt-4 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={handleUpload} >
          Upload files
        </button>
      </div>
      <section className="container mx-auto mt-8">
        <div className="flex flex-1 flex-col">
          {allPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 shadow-md rounded-md mb-4"
              style={{ height: "50vh" }}
            >
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
