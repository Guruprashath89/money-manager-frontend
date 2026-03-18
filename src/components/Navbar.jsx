import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ isAuth, logout }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-lg font-bold tracking-wide">
          Money Manager
        </h1>

        {/* Desktop Menu */}
        {isAuth && (
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-200">Dashboard</Link>
            <Link to="/history" className="hover:text-gray-200">History</Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded transition"
            >
              Logout
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isAuth && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl"
          >
            ☰
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && isAuth && (
        <div className="md:hidden bg-blue-500 px-4 pb-4 space-y-3">

          <Link
            to="/"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            to="/history"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            History
          </Link>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}