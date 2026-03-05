import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function ExpenseChart({ transactions }) {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Amount",
        data: [income, expense],
        backgroundColor: ["#16a34a", "#dc2626"]
      }
    ]
  };
  if (transactions.length === 0) {
  return (
    <div className="bg-white p-4 rounded shadow h-64 flex items-center justify-center text-gray-400">
      No data yet
    </div>
  );
}


  return (
   <div className="bg-white p-4 rounded shadow h-64 flex items-center justify-center">

      <Bar data={data} />
    </div>
  );
}
