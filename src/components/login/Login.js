import React from 'react';
import { Link } from 'react-router-dom';
import Register from './register';

const Login = () => {
    const hasAccount = false;
  return (
    <section className="bg-gray-200 h-[100vh] py-8 flex items-center">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto bg-white p-8 border shadow-lg rounded-lg animate-fadeInUp">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Resource Sharing App Login
          </h2>
          <form>
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
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                placeholder="******"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
            >
              Login
            </button>

            {hasAccount ? (
              <p className="mt-2 text-center">
                Already have an account? <a href={<Login />} className="link-style">Sign In</a>
              </p>
            ) : (
              <p className="mt-2 text-center">
                Don't have an account? <Link to="/register" className="link-style">Register</Link>
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
