// File: src/pages/LoginPage.tsx
import { Link, useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { login } from "../api/UserData";

export default function LoginPage() {
  const navigate = useNavigate();
  const inputEmail = useRef<HTMLInputElement | null>(null);
  const inputPassword = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputEmail || inputPassword) {
      console.log(inputEmail.current?.value);
      console.log(inputPassword.current?.value);
      const payload = {
        userEmail: inputEmail.current?.value || "",
        userPw: inputPassword.current?.value || "",
      };
      try {
        const data = await login(payload);
        console.log(data);
      } catch (error) {
        console.error(error);
        console.log("error block");
      }
    }
    //navigate("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
        <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded border p-2"
            ref={inputEmail}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full rounded border p-2"
            ref={inputPassword}
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
