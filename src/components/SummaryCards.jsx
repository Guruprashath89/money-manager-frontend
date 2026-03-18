export default function SummaryCards({ transactions }) {

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = income - expense;

  const incomeCount = transactions.filter(t => t.type === "income").length;
  const expenseCount = transactions.filter(t => t.type === "expense").length;
  const totalCount = transactions.length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

      {/* Income */}
      <div className="bg-green-100 p-5 rounded-xl shadow-sm hover:shadow-md transition text-center">
        <h3 className="font-semibold text-gray-700 mb-1">Income</h3>

        <p className="text-2xl font-bold text-green-700">
          ₹ {income}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {incomeCount} transactions
        </p>
      </div>

      {/* Expense */}
      <div className="bg-red-100 p-5 rounded-xl shadow-sm hover:shadow-md transition text-center">
        <h3 className="font-semibold text-gray-700 mb-1">Expense</h3>

        <p className="text-2xl font-bold text-red-600">
          ₹ {expense}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {expenseCount} transactions
        </p>
      </div>

      {/* Balance */}
      <div className="bg-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition text-center">
        <h3 className="font-semibold text-gray-700 mb-1">Balance</h3>

        <p className="text-2xl font-bold text-blue-700">
          ₹ {balance}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {totalCount} total
        </p>
      </div>

    </div>
  );
}