import React, { useState } from "react";
import { Link } from "react-router-dom";

const FileSearch = () => {
  const [tags, setTags] = useState("");
  const [results, setResults] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set the user's login status


  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";

    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  };

  const handleSearch = () => {
    if (!tags) {
      setError("Tags parameter is required");
      return;
    }

    setError(""); // Clear any previous error

    fetch(`http://localhost:5050/posts?tags=${tags}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((files) => {
        if (files.length > 0) {
          setResults(files);
        } else {
          setResults([]);
          setError("No files found");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error retrieving Files Data");
      });
  };

  const openPopup = (file) => {
    setSelectedFile(file);
  };

  const closePopup = () => {
    setSelectedFile(null);
  };

  return (
    <>
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
            <Link to="/sign-in" className="hover:underline text-white">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Input and search button */}
      <input
        type="text"
        placeholder="Enter tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        onClick={handleSearch}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Search
      </button>
      {error && <p className="mt-2 text-red-500">{error}</p>}

      {/* Search results */}
      {results.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Search Results
          </h2>
          <ul className="grid grid-cols-1 gap-4">
            {results.map((file, index) => (
              <li
                key={index}
                onClick={() => openPopup(file)}
                className="cursor-pointer bg-white border border-gray-300 rounded-md p-6 shadow-md transform hover:scale-105 transition duration-300"
              >
                <div className="mb-2">
                  <span className="font-semibold text-gray-800">Filename:</span>{" "}
                  {file.filename}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-gray-800">Size:</span>{" "}
                  {formatFileSize(file.size)}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-gray-800">
                    Uploaded By:
                  </span>{" "}
                  {file.uploadedby}
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Tags:</span>{" "}
                  {file.tags.join(", ")}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Popup */}
      {selectedFile && (
        <div className="fixed top-0 right-0 h-screen w-1/3 bg-white p-8 shadow-lg overflow-y-auto">
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            Close
          </button>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            File Details
          </h2>
          <div className="mb-4">
            <strong>Filename:</strong> {selectedFile.filename}
          </div>
          <div className="mb-4">
            <strong>Size:</strong> {formatFileSize(selectedFile.size)}
          </div>
          <div className="mb-4">
            <strong>Uploaded By:</strong> {selectedFile.uploadedby}
          </div>
          <div>
            <strong>Tags:</strong> {selectedFile.tags.join(", ")}
          </div>
          <div className="mt-6">
            <a
              href={`http://localhost:5050/api/download/${selectedFile.uniquename}`}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              download
            >
              Download
            </a>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default FileSearch;
