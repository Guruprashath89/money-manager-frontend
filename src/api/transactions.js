import axios from "axios";

const API = axios.create({
  baseURL: "https://money-manager-backend-amjf.onrender.com"
});

// GET all transactions
export const getTransactions = () =>
  API.get("/transactions");

// ADD transaction
export const addTransaction = (data) =>
  API.post("/transactions", data);

// DELETE transaction
export const deleteTransaction = (id) =>
  API.delete(`/transactions/${id}`);
