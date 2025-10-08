import { useState } from "react";

// Functionality to add a separate task for a specific list
function AddTaskForm({ onAdd }) {
  const [name, setName] = useState("");

  // Handler
  const handleAdd = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    onAdd(name);
    setName("");
  };

  // True if task name is greater than or equal to 3 characters long
  const isValid = name.trim().length >= 3;

  /*  
  //Determine the user's new task name
  A text box asks the user to enter a name, and a separate button will submit the choice
  */
  return (
    <form className="add-task" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" disabled={!isValid}>
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
