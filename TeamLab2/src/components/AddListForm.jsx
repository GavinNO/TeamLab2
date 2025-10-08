import { useState } from "react";

// Functionality to set up a new list for a user
function AddListForm({ onAdd }) {
  const [name, setName] = useState("");

  // Handler
  const handleAdd = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    onAdd(name);
    setName("");
  };

  // True if list name is greater than or equal to 3 characters long
  const isValid = name.trim().length >= 3;

  // Determine the user's new list name
  // A text box asks the user to enter a name, and a separate button will submit the choice
  return (
    <form className="add-list" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter list name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" disabled={!isValid}>
        Add List
      </button>
    </form>
  );
}

export default AddListForm;
