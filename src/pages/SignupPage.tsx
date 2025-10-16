import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { signin } from "../api/UserData";

export default function SignupPage() {
  const navigate = useNavigate();
  //const [input, setInput] = useState({ userName: "", email: "", password: "" });
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userName, userEmail, userPassword);
    if (userEmail || userPassword) {
      const payload = {
        userName: userName,
        userEmail: userEmail,
        userPw: userPassword,
      };
      try {
        const data = await signin(payload);
        console.log(data);
      } catch (error) {
        console.error(error);
        console.log("error block");
      }
    }
  };
  console.log(userName);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
        <h2 className="mb-6 text-center text-2xl font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="w-full rounded border p-2"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded border p-2"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            minLength={5}
            className="w-full rounded border p-2"
            value={userPassword}
            onChange={(e) => setuserPassword(e.target.value)}
          />
          {/* <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            minLength={6}
            className="w-full rounded border p-2"
          /> */}
          <button
            type="submit"
            className="w-full rounded bg-green-600 py-2 text-white hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
