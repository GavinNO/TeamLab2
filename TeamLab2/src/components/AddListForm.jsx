import { useState } from "react";

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