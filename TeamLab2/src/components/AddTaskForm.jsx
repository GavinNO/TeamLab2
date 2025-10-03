import { useState } from "react";

function AddTaskForm({ onAdd }) {
  const [name, setName] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    onAdd(name);
    setName("");
  };

  const isValid = name.trim().length >= 3;

  return (
    <form className="add-task" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" disabled={!isValid}>Add Task</button>
    </form>
  );
}