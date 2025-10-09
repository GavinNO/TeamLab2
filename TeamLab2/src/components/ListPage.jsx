import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import FilterBar from "./FilterBar";

// Functionality to display a specific list, with functionality to add, delete, and set 
// the completion status of "tasks"
export default function ListPage({ list, onBack, onAddTask, onToggleTask, onDeleteTask }) {
  const [filter, setFilter] = useState("all");

  // Function to filter tasks for the user
  function filteredTasks() {
    if (filter === "active") return list.tasks.filter((t) => !t.done);
    if (filter === "completed") return list.tasks.filter((t) => t.done);
    return list.tasks;
  }

  const visibleTasks = filteredTasks();
  const completed = list.tasks.filter((t) => t.done).length;
  const total = list.tasks.length;

  /*
  Overall display
  1. Display the list name and the number of items completed out of the total
  2. Add a bar for the user to add new tasks for the selected list
  3. Iterate and display each user-generated task
  */
  return (
    <div style={{ marginTop: "2rem" }}>
      <button onClick={onBack} style={{ background: "#555" }}>← Back</button>
      <h2>{list.name}</h2>
      <p>{completed} of {total} completed</p>
      <AddTaskForm onAdd={(text) => onAddTask(list.id, text)} />
      <FilterBar filter={filter} setFilter={setFilter} />
      {visibleTasks.length > 0 ? (
        <TaskList
          tasks={visibleTasks}
          listId={list.id}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ) : (
        <p>{total === 0 ? "This list is empty." : "No tasks match your filter."}</p>
      )}
    </div>
  );
}
