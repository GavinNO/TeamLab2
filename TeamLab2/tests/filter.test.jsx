// src/components/FilterBar.jsx
export default function FilterBar({ filter, onChange }) {
  const filters = ["all", "active", "completed"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "0.75rem",
        marginBottom: "1.5rem",
      }}
    >
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          style={{
            padding: "0.4rem 0.9rem",
            borderRadius: "6px",
            border: f === filter ? "2px solid #646cff" : "1px solid #ccc",
            backgroundColor: f === filter ? "#646cff" : "#f0f0f0",
            color: f === filter ? "#fff" : "#333",
            fontWeight: f === filter ? "bold" : "normal",
            cursor: "pointer",
            textTransform: "capitalize",
            transition: "all 0.2s ease",
          }}
          aria-pressed={f === filter}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
