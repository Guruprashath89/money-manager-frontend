import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CategoryPieChart({ transactions }) {

  // ✅ STEP 1 — filter expenses FIRST
  const expenseTransactions = transactions.filter(
    t => t.type === "expense"
  );

  // ✅ STEP 2 — empty state
  if (expenseTransactions.length === 0) {
    return (
      <div className="bg-white p-4 rounded shadow h-64 flex items-center justify-center text-gray-400">
        No expenses yet
      </div>
    );
  }

  // ✅ STEP 3 — build category totals
  const categoryMap = {};

  expenseTransactions.forEach((t) => {
    if (!categoryMap[t.category]) {
      categoryMap[t.category] = 0;
    }

    categoryMap[t.category] += Number(t.amount);
  });

  const labels = Object.keys(categoryMap);
  const values = Object.values(categoryMap);

  // ✅ STEP 4 — chart data
  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "#ef4444",
          "#f59e0b",
          "#10b981",
          "#3b82f6",
          "#8b5cf6",
          "#ec4899"
        ]
      }
    ]
  };

  return (
    
    <div className="bg-white p-4 rounded shadow h-64 flex items-center justify-center">
      <Doughnut
        data={data}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}
