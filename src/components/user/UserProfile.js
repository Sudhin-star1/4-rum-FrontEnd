import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const UserProfile = () => {
  return (
    <>
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
                <Link to="#">ABOUT</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="#">CONTACT</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/user-profile">Profile</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/comments-and-discussions">Comments and Discussions</Link>
              </li>
              {/* Add other navbar items here */}
            </ul>
          </div>
        </nav>
      </div>

      <div className="bg-white p-4 shadow-lg rounded-lg">
        {/* Cover Photo */}
        <div className="relative">
          <img
            src="cover-photo.jpg"
            alt="Cover Photo"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black rounded-t-lg"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <img
              src="profile-photo.jpg"
              alt="Profile Photo"
              className="w-20 h-20 rounded-full border-4 border-white"
            />
            <h2 className="text-xl font-semibold mt-2">John Doe</h2>
            <p className="text-gray-300">Computer Science Student</p>
          </div>
        </div>

        {/* Student Information */}
        <div className="p-4">
          <h3 className="text-xl font-semibold">About Me</h3>
          <p className="text-gray-600">
            Hi, I'm John Doe, a Computer Science student passionate about
            software development and AI.
          </p>
          <h3 className="text-xl font-semibold mt-4">Education</h3>
          <p className="text-gray-600">
            Bachelor of Science in Computer Science
          </p>
          <p className="text-gray-600">University of XYZ</p>

          {/* Skills */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Skills</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>JavaScript</li>
              <li>React</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>

          {/* Achievements */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Achievements</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Won 1st place in the university hackathon</li>
              <li>Published a research paper on AI</li>
              <li>Received a scholarship for academic excellence</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
