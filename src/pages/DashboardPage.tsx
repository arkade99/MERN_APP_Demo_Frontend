import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getData } from "../api/UserData";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  const handleLogout = () => {
    navigate("/login");
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getData();
        console.log(response);
        setUserData(response?.data);
      } catch (error) {
        console.error(error);
        console.log("error block");
      }
    }
    fetchData();
  }, []);
  console.log(userData);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Movie Dashboard</h1>
        <button
          onClick={handleLogout}
          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg bg-white p-6 shadow">
          Placeholder for Movies
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          Placeholder for Recommendations
        </div>
      </div>
    </div>
  );
}
