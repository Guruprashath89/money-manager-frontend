import { useState } from "react";
import TransactionModal from "../components/TransactionModal";
import TransactionTable from "../components/TransactionTable";
import SummaryCards from "../components/SummaryCards";
import Filters from "../components/Filters";
import ExpenseChart from "../components/ExpenseChart";
import CategoryPieChart from "../components/CategoryPieChart";

export default function Dashboard({
  transactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  editingTransaction,
  setEditingTransaction
}) {
  const [filters, setFilters] = useState({
    type: "all",
    category: "",
    date: ""
  });

  const filteredTransactions = transactions.filter((t) => {
    const matchType =
      filters.type === "all" || t.type === filters.type;

    const matchCategory =
      t.category
        .toLowerCase()
        .includes(filters.category.toLowerCase());

    const matchDate =
      !filters.date || t.date === filters.date;

    return matchType && matchCategory && matchDate;
  });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Analytics heading */}
      <div className="flex items-center gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Analytics
        </h2>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <SummaryCards transactions={transactions} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        <ExpenseChart transactions={transactions} />
        <CategoryPieChart transactions={transactions} />
      </div>

      {/* Transactions heading */}
      <div className="flex items-center gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Transactions
        </h2>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <TransactionModal
        addTransaction={addTransaction}
        updateTransaction={updateTransaction}
        editingTransaction={editingTransaction}
        setEditingTransaction={setEditingTransaction}
      />

      <Filters filters={filters} setFilters={setFilters} />

      <TransactionTable
        transactions={filteredTransactions}
        deleteTransaction={deleteTransaction}
        setEditingTransaction={setEditingTransaction}
      />
    </div>
  );
}
