import { useState } from "react";

export default function AddListForm({ onAction }) {  
  const [name, setName] = useState(""); // controlled input

  function addList() {
    if (name.length >= 3) {
      onAction(name);
      setName(""); // clear after submit
    }
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      <input 
        type="text" 
        placeholder="Enter list name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button 
        onClick={addList} 
        disabled={name.length < 3} // disable until ≥3 chars
      >
        Create
      </button>
    </div>
  );
}


