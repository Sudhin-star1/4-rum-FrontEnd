import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import UserProfile from "./components/user/UserProfile";
import FileSearch from "./components/search/search";

const App = () => {
  return (
    <div>
      {/* Navbar
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <ul className="flex space-x-4 text-white">
            <li className="hover:underline cursor-pointer">
              <Link to="#">HOME</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="#">ABOUT</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="#">CONTACT</Link>
            </li>
            <li className="hover:underline cursor-pointer"><Link to="/user-profile">Profile</Link></li>
              {/* Add other navbar items here */}
      {/* </ul>
        </div>
      </nav> */}

      <div>
        {/* Navbar */}
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <ul className="flex justify-between text-white">
              <li className="hover:underline cursor-pointer">
                <Link to="/home">HOME</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/search">Search</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="#">CONTACT</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/user-profile">Profile</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/comments-and-discussions">DISCUSSION</Link>
              </li>
              {/* Add other navbar items here */}
            </ul>
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

      {/* Features Section */}
      <div className="flex flex-1 h-min-[100vh] w-full gap-5">
        <section className="bg-gray-100 py-8 flex flex-col w-[60%]">
          <div className="container mx-auto">
            <div className="flex flex-col gap-8">
              {/* Resource Sharing */}
              <div className="bg-white p-4 shadow-md rounded-md">
                <h2 className="text-xl font-bold mb-2">Resource Sharing</h2>
                <p>
                  Share educational resources and materials with fellow
                  students.
                </p>
              </div>

              {/* Notes Sharing */}
              <div className="bg-white p-4 shadow-md rounded-md">
                <h2 className="text-xl font-bold mb-2">Notes Sharing</h2>
                <p>Upload and access important notes for your courses.</p>
                
                <br></br>
                <br></br>
                
                <form method="POST" action="http://localhost:5050/api/upload" encType="multipart/form-data">
                  <input type="file" name="file" />
                  <input type="text" name="tags" />
                  <input type="submit" value="Upload" />
                </form>

                {/* <ImageForm /> */}
              </div>

              {/* On-Campus News */}
              <div className="bg-white p-4 shadow-md rounded-md">
                <h2 className="text-xl font-bold mb-2">On-Campus News</h2>
                <p>
                  Stay updated with the latest news and events on your campus.
                </p>
                <FileSearch />
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-gray-200 py-8 ">
          <div className="container mx-auto">
            <div className="max-w-md mx-auto bg-white p-8 border shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Resource Sharing App Registration
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                    placeholder="John"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                    placeholder="Doe"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Campus Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                    placeholder="johndoe@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                    placeholder="123-456-7890"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
