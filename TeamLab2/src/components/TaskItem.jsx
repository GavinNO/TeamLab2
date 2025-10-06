export default function TaskItem({ id, listId, text, done, onToggle, onDelete }) {
  const style = {
    textDecoration: done ? "line-through" : "none",
    color: done ? "gray" : "black",
    marginBottom: "0.5rem",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
      }}
    >
      <input
        type="checkbox"
        checked={done}
        onChange={() => onToggle(listId, id)}
      />
      <span style={style}>{text}</span>
      <button onClick={() => onDelete(listId, id)} style={{ background: "crimson" }}>
        Delete
      </button>
    </div>
  );
}
