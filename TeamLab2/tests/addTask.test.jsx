// src/components/AddTaskForm.jsx
import { useState } from "react";

export default function AddTaskForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim().length < 3) return; // ✅ Disable short entries
    onAdd(text);
    setText(""); // ✅ Clear input
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "0.5rem",
        justifyContent: "center",
        marginBottom: "1.5rem",
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        aria-label="Task name"
        style={{
          flex: 1,
          padding: "0.6rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "1rem",
        }}
      />
      <button
        type="submit"
        disabled={text.trim().length < 3}
        style={{
          padding: "0.6rem 1rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: text.trim().length < 3 ? "#999" : "#646cff",
          color: "white",
          cursor: text.trim().length < 3 ? "not-allowed" : "pointer",
          fontWeight: "bold",
        }}
      >
        Add
      </button>
    </form>
  );
}
