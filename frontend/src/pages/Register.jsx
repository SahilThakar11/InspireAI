import React from "react";
import logo from "../assets/InspireAI.png";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-n-8/80 to-n-11/70 flex items-center justify-center">
        <div className="max-w-md w-full mx-4 p-8 bg-n-8/50 backdrop-blur-lg rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <img
              src={logo}
              alt="InspireAI Logo"
              className="mx-auto w-24 h-24"
            />
            <h2 className="text-3xl font-bold text-white">
              Create New Account
            </h2>
            <p className="text-white/70 mt-2">Join InspireAI today</p>
          </div>
          <form action="#">
            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 text-white bg-n-7 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 text-white bg-n-7 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full p-3 text-white bg-n-7 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>{" "}
            <Link to="/">
              <button className="w-full py-3 bg-white font-bold text-black rounded-lg hover:bg-slate-50 transition-colors">
                Create Account
              </button>
            </Link>
          </form>
          <p className="text-center text-white/70 mt-6">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-indigo-400 hover:text-sky-300 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
