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
    <div className="grid grid-cols-3 gap-4">

      <div className="bg-green-100 p-4 rounded shadow text-center">
        <h3 className="font-bold">Income</h3>
        <p className="text-xl text-green-700">₹ {income}</p>
        <p className="text-sm text-gray-500">{incomeCount} transactions</p>


      </div>

      <div className="bg-red-100 p-4 rounded shadow text-center">
        <h3 className="font-bold">Expense</h3>
        <p className="text-xl text-red-700">₹ {expense}</p>
        <p className="text-sm text-gray-500">{expenseCount} transactions</p>

      </div>

      <div className="bg-blue-100 p-4 rounded shadow text-center">
        <h3 className="font-bold">Balance</h3>
        <p className="text-xl text-blue-700">₹ {balance}</p>
        <p className="text-sm text-gray-500">{totalCount} total</p>

      </div>

    </div>
  );
}
