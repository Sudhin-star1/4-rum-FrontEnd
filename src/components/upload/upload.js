import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Upload = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
        <form
          className="w-96 mx-auto p-6 bg-white rounded-lg shadow-md border-blue-200"
          method="POST"
          action="http://localhost:5050/files/upload"
          encType="multipart/form-data"
        >
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Select File:
            </label>
            <input
              type="file"
              name="file"
              className="py-2 px-3 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Tags:
            </label>
            <input
              type="text"
              name="tags"
              className="py-2 px-3 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Filename:
            </label>
            <input
              type="text"
              name="filename"
              className="py-2 px-3 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Uploaded By:
            </label>
            <input
              type="text"
              name="uploadedby"
              className="py-2 px-3 border rounded w-full"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Upload
            </button>
          </div>
        </form>
      </CSSTransition>

      <Link to="/" className="mt-4 text-blue-500 hover:underline absolute top-[10%] ">
        Go Back to Home
      </Link>
    </div>
  );
};

export default Upload;
