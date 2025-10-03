import { useState } from "react";

<<<<<<< HEAD
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
=======
export default function AddTaskForm({ onAction }) {  
  const [name, setName] = useState(""); // controlled input

  function addTask() {
    if (name.length >= 3) {
      onAction(name);
      setName(""); // clear after submit
    }
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      <input 
        type="text" 
        placeholder="Enter task name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button 
        onClick={addTask} 
        disabled={name.length < 3} // disable until ≥3 chars
      >
        Create
      </button>
    </div>
  );
}


>>>>>>> c72cf1cfaf565784aeb1c74aee1f94ee9f13cecb
