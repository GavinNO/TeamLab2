import { useState } from "react";

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


