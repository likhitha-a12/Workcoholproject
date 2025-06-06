"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { signInWithGoogle } from "../../store/firebase/firebaseconfig";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem('user', JSON.stringify({ username }));
      window.location.href = '/';
    } else {
      alert('Enter username and password');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle(); // ✅ Use function from config
      const user = result.user;
      localStorage.setItem('user', JSON.stringify({ username: user.displayName }));
      window.location.href = '/';
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert("Google Sign-In failed");
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Head>

      <div
        className="min-h-screen w-full flex justify-center items-center p-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/login1.jpg')" }}
      >
        <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
          <div className="flex justify-center mb-4">
            <Image src="/images/logo1.jpg" alt="Company Logo" width={100} height={100} className="rounded-full shadow-md" />
          </div>

          <h1 className="text-3xl font-bold text-center text-blue-700">Login</h1>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block font-medium">Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Login
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center mt-6">
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center gap-3 bg-white border border-gray-300 text-gray-700 rounded-full px-5 py-2 shadow hover:shadow-md transition"
            >
              <img src="/images/google-logo.jpg" alt="Google" className="w-5 h-5" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
