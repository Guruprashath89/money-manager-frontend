export default function Filters({ filters, setFilters }) {
  return (
    <div className="flex gap-3 flex-wrap">

      {/* Type */}
      <select
        value={filters.type}
        onChange={(e) =>
          setFilters({ ...filters, type: e.target.value })
        }
        className="border p-2 rounded"
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Category */}
      <input
        placeholder="Search category"
        value={filters.category}
        onChange={(e) =>
          setFilters({ ...filters, category: e.target.value })
        }
        className="border p-2 rounded"
      />

      {/* Date */}
      <input
        type="date"
        value={filters.date}
        onChange={(e) =>
          setFilters({ ...filters, date: e.target.value })
        }
        className="border p-2 rounded"
      />
    </div>
  );
}
