import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ isAuth, logout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold">Money Manager</h1>

      {isAuth && (
        <div className="space-x-4">
          <Link to="/">Dashboard</Link>
          <Link to="/history">History</Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
