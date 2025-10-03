import { useState } from "react";

export default function AddCounterForm({ onAction }) {  
  const [name, setName] = useState(""); // controlled input

  function addCounter() {
    if (name.length >= 3) {
      onAction(name);
      setName(""); // clear after submit
    }
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      <input 
        type="text" 
        placeholder="Enter counter name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button 
        onClick={addCounter} 
        disabled={name.length < 3} // disable until ≥3 chars
      >
        Create
      </button>
    </div>
  );
}


