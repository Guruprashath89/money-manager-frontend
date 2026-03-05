import TransactionTable from "../components/TransactionTable";

export default function History({
  transactions,
  deleteTransaction
}) {

  return (
    <div className="p-6 space-y-6">

      {/* Page title */}
      <h1 className="text-2xl font-bold">Transaction History</h1>

      {/* subtle description */}
      <p className="text-sm text-gray-500">
        View and manage all your past transactions
      </p>

      {/* divider */}
      <div className="h-px bg-gray-200"></div>

      {/* full table */}
      <TransactionTable
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />

    </div>
  );
}
