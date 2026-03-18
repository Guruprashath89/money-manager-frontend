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
      t.category.toLowerCase().includes(filters.category.toLowerCase());

    const matchDate =
      !filters.date || t.date === filters.date;

    return matchType && matchCategory && matchDate;
  });

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6">

      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Money Manager Dashboard
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Track and manage your finances easily
          </p>
        </div>

        {/* Analytics Section */}
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 space-y-6">

          <div className="flex items-center gap-3">
            <h2 className="text-sm sm:text-lg font-semibold text-gray-700">
              Financial Analytics
            </h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Summary Cards */}
          <SummaryCards transactions={transactions} />

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
              <ExpenseChart transactions={transactions} />
            </div>

            <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
              <CategoryPieChart transactions={transactions} />
            </div>

          </div>

        </div>

        {/* Transactions Section */}
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 space-y-6">

          <div className="flex items-center gap-3">
            <h2 className="text-sm sm:text-lg font-semibold text-gray-700">
              Transactions
            </h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Add Transaction */}
          <TransactionModal
            addTransaction={addTransaction}
            updateTransaction={updateTransaction}
            editingTransaction={editingTransaction}
            setEditingTransaction={setEditingTransaction}
          />

          {/* Filters */}
          <div className="bg-slate-50 p-3 sm:p-4 rounded-lg">
            <Filters filters={filters} setFilters={setFilters} />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <TransactionTable
              transactions={filteredTransactions}
              deleteTransaction={deleteTransaction}
              setEditingTransaction={setEditingTransaction}
            />
          </div>

        </div>

      </div>

    </div>
  );
}