export default function ListCard({ id, name, tasks, onSelect, onDelete }) {
  // Total number of tasks, and how many are "completed"
  const total = tasks.length;
  const completed = tasks.filter((t) => t.done).length;

  // Display a card that gives a detailed list breakdown for the user
  // Display the name
  // Show how many tasks are completed out of the total number
  // An "open" button brings the user to edit the list
  // A "delete" button removes the list entirely
  return (
    <div
      style={{
        background: "#fff",
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        width: "220px",
        textAlign: "center",
      }}
    >
      <h3>{name}</h3>
      <p>{completed} / {total} completed</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
        <button onClick={onSelect}>Open</button>
        <button onClick={onDelete} style={{ background: "crimson" }}>
          Delete
        </button>
      </div>
    </div>
  );
}
