
import React, { useState } from "react";

const FileSearch = () => {
  const [tags, setTags] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!tags) {
      setError("Tags parameter is required");
      return;
    }

    setError(""); // Clear any previous error

    fetch(`http://localhost:5050/api/files?tags=${tags}`)
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

  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
      {results.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Search Results:</h2>
          {results.map((file, index) => (
            <p key={index} className="mt-2 text-[30px]">
              {file.id}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileSearch;
