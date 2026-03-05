import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Login from "./pages/Login";

import {
  getTransactions,
  addTransaction,
  deleteTransaction
} from "./api/transactions";

import axios from "axios";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem("token")
  );

  // 🔥 fetch data only when logged in
  useEffect(() => {
    if (isAuth) {
      fetchTransactions();
    }
  }, [isAuth]);

  const fetchTransactions = async () => {
    const res = await getTransactions();
    setTransactions(res.data);
  };

  const handleAddTransaction = async (data) => {
    await addTransaction(data);
    fetchTransactions();
  };

  const handleDeleteTransaction = async (id) => {
    await deleteTransaction(id);
    fetchTransactions();
  };

  const updateTransaction = async (id, data) => {
    const res = await axios.put(
      `https://money-manager-backend-amjf.onrender.com/transactions/${id}`,
      data
    );

    setTransactions(prev =>
      prev.map(t => (t._id === id ? res.data : t))
    );
  };

  // 🔥 LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    setTransactions([]);
  };

  return (
    <BrowserRouter>
      <Navbar isAuth={isAuth} logout={logout} />

      <Routes>
        {/* LOGIN */}
        <Route
          path="/login"
          element={
            isAuth ? <Navigate to="/" /> : <Login setAuth={setIsAuth} />
          }
        />

        {/* DASHBOARD */}
        <Route
          path="/"
          element={
            isAuth ? (
              <Dashboard
                transactions={transactions}
                addTransaction={handleAddTransaction}
                deleteTransaction={handleDeleteTransaction}
                updateTransaction={updateTransaction}
                editingTransaction={editingTransaction}
                setEditingTransaction={setEditingTransaction}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* HISTORY */}
        <Route
          path="/history"
          element={
            isAuth ? (
              <History
                transactions={transactions}
                deleteTransaction={handleDeleteTransaction}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
