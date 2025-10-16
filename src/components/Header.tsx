// File: src/components/Header.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  //const navigate = useNavigate();

  //   const handleLogout = () => {
  //     navigate("/login");
  //   };

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-8 h-8 invert" />
        <h1 className="text-xl font-bold">MovieApp</h1>
      </div>

      <button
        className="md:hidden block text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-800 md:bg-transparent md:static md:flex md:space-x-6 text-center md:text-left px-2`}
      >
        <Link to="/dashboard" className="block px-4 py-2 hover:text-gray-300">
          Dashboard
        </Link>
        <Link to="/login" className="block px-4 py-2 hover:text-gray-300">
          Login
        </Link>
        <Link to="/signup" className="block px-4 py-2 hover:text-gray-300">
          Sign Up
        </Link>
        {/* <button
          onClick={handleLogout}
          className="block px-4 py-2 text-left w-full hover:text-gray-300 md:w-auto"
        >
          Logout
        </button> */}
      </nav>
    </header>
  );
}
