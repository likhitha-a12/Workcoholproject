"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for registering, ${formData.username}!`);
  };

  return (
    <>
      <Head>
        <title>Event Registration</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-12 bg-cover bg-center p-8"
        style={{ backgroundImage: "url('/images/reg.jpg')" }}
      >
        {/* Logo Section */}
        <div className="flex justify-center items-center">
          <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-4 border-pink-400 bg-white bg-opacity-90">
            <Image
              src="/images/logo1.jpg"
              alt="Company Logo"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white bg-opacity-90 p-6 rounded-md shadow-md max-w-md w-full">
          <h1 className="text-3xl font-bold text-center text-pink-600 mb-2">
            Eventify
          </h1>
          <p className="text-center text-gray-500 mb-4">
            Creating Moments, Crafting Memories
          </p>

          <h2 className="text-xl font-semibold text-center text-indigo-600 mb-4">
            Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">User Name:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium">E-Mail ID:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium">Confirm Password:</label>
              <input
                type="password"
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
