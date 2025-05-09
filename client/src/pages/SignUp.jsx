import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setformData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const handelChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  console.log(formData)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success == false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null)
      navigate('/sign-in')
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Sign Up
          </h2>

          {/* Google Button */}
          <OAuth></OAuth>

          {/* Divider */}
          <div className="flex items-center justify-center mb-4">
            <div className="border-t w-1/4 border-gray-300" />
            <span className="text-sm text-gray-500 mx-2">or sign up with</span>
            <div className="border-t w-1/4 border-gray-300" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Your username"
                className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onChange={handelChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onChange={handelChange}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onChange={handelChange}
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition uppercase"
            >
              {loading ? "loading...." : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to={"/sign-in"}>
              <span className="text-blue-700">Sign In</span>
            </Link>
          </p>
          {error && <p className="text-red-600 mt-5 text-center">{error}</p>} 
        </div>
      </div>
    </>
  );
}
