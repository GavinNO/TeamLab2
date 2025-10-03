import { useState } from "react";

<<<<<<< HEAD
function AddListForm({ onAdd }) {
  const [name, setName] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    onAdd(name);
    setName("");
  };

  const isValid = name.trim().length >= 3;

  return (
    <form className="add-list" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter list name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" disabled={!isValid}>Add List</button>
    </form>
  );
}
=======
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


>>>>>>> c72cf1cfaf565784aeb1c74aee1f94ee9f13cecb
