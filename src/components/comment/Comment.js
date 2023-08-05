import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";


const CommentSection = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "This is the first comment", votes: 0 },
    { id: 2, text: "This is the second comment", votes: 0 },
    { id: 3, text: "This is the third comment", votes: 0 },
  ]);

  const [newDiscussion, setNewDiscussion] = useState("");

  const handleVote = (id, voteType) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? voteType === "upvote"
            ? { ...comment, votes: comment.votes + 1 }
            : { ...comment, votes: comment.votes - 1 }
          : comment
      )
    );
  };

  const handleAddDiscussion = () => {
    if (newDiscussion.trim() === "") {
      return;
    }

    const newId = comments.length + 1;
    setComments((prevComments) => [
      ...prevComments,
      { id: newId, text: newDiscussion, votes: 0 },
    ]);
    setNewDiscussion("");
  };

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
                <Link to="/comments-and-discussions">
                  Comments and Discussions
                </Link>
              </li>
              {/* Add other navbar items here */}
            </ul>
          </div>
        </nav>
      </div>

      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Discussion Section</h2>
        <div className="bg-white p-4 mb-4 shadow-md rounded-lg">
          <textarea
            className="w-full p-2 border rounded mb-4"
            rows="3"
            placeholder="Start a new discussion..."
            value={newDiscussion}
            onChange={(e) => setNewDiscussion(e.target.value)}
          ></textarea>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleAddDiscussion}
          >
            Add Discussion
          </button>
        </div>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white p-4 mb-4 shadow-md rounded-lg"
          >
            <div className="flex items-center justify-between">
              <p className="text-lg">{comment.text}</p>
              <div className="flex items-center">
                <button
                  className="text-gray-500 hover:text-green-500 focus:outline-none"
                  onClick={() => handleVote(comment.id, "upvote")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
                <span className="text-gray-600 mx-2">{comment.votes}</span>
                <button
                  className="text-gray-500 hover:text-red-500 focus:outline-none"
                  onClick={() => handleVote(comment.id, "downvote")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentSection;
