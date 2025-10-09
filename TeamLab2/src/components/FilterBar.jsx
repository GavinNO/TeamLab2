export default function FilterBar({ filter, setFilter }) {
  // List of "task states" for user filtering
  const filters = ["all", "active", "completed"];

  /*
  Depending on what filter is chosen, show all tasks depending on completion status
  1. Three buttons "All", "Active", "Completed"
  2. On a click, find all tasks that are associated with the choice given
  */
  return (
    <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          style={{
            background: filter === f ? "#2a6bb0" : "#ccc",
            color: filter === f ? "white" : "black",
          }}
        >
          {f[0].toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
