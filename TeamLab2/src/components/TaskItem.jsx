export default function TaskItem({ id, listId, text, done, onToggle, onDelete }) {
  // The style if a task item is completed: Crossed out and greyed
  const style = {
    textDecoration: done ? "line-through" : "none",
    color: done ? "gray" : "black",
    marginBottom: "0.5rem",
  };

  /*
  Task information
  1. Display the task item
  2. If the user checks off a task, toggle the task to "completed". If pressed again, toggle back.
  3. Draw a delete button for the specific task item
  */
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
