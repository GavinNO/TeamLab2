export default function FilterBar({ filter, setFilter }) {
  const filters = ["all", "active", "completed"];

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
