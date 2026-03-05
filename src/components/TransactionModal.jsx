import { useState, useEffect } from "react";

export default function TransactionModal({
  addTransaction,
  updateTransaction,
  editingTransaction,
  setEditingTransaction
}) {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    type: "income",
    amount: "",
    category: "",
    division: "personal",
    description: "",
    date: ""
  });

  // 🔹 Pre-fill form when editing
  useEffect(() => {
    if (editingTransaction) {
      setForm(editingTransaction);
      setOpen(true); // open modal automatically on edit
    }
  }, [editingTransaction]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      type: "income",
      amount: "",
      category: "",
      division: "personal",
      description: "",
      date: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTransaction) {
      updateTransaction(editingTransaction._id, form);
      setEditingTransaction(null);
    } else {
      addTransaction(form);
    }

    resetForm();
    setOpen(false);
  };

  const handleCancel = () => {
    resetForm();
    setEditingTransaction(null);
    setOpen(false);
  };

  return (
    <>
      {/* Add Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        + Add Transaction
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-96 p-6 rounded-lg space-y-4">

            <h2 className="text-lg font-bold">
              {editingTransaction ? "Edit Transaction" : "Add Transaction"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

              {/* Type */}
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>

              {/* Amount */}
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={form.amount}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />

              {/* Category */}
              <input
                name="category"
                placeholder="Category (food, fuel...)"
                value={form.category}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              {/* Division */}
              <select
                name="division"
                value={form.division}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="personal">Personal</option>
                <option value="office">Office</option>
              </select>

              {/* Description */}
              <input
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              {/* Date */}
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-3 py-1 border rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  {editingTransaction ? "Update" : "Save"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}
