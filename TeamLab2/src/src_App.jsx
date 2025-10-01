import { useState } from "react";
import Header from "./components/Header.jsx";
import AddTaskForm from "./components/AddTaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import FilterBar from "./components/FilterBar.jsx";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy textbook", done: false },
    { id: 2, text: "Email advisor", done: true },
  ]);
  const [filter, setFilter] = useState("all"); // 'all' | 'active' | 'completed'

  return (
    <div style={{ maxWidth: 640, margin: "2rem auto", fontFamily: "system-ui" }}>
      <Header />
      <AddTaskForm /* onAdd={fn} */ />
      <FilterBar filter={filter} onChange={setFilter} />
      <TaskList tasks={tasks} /* onToggle={fn} onDelete={fn} */ filter={filter} />
    </div>
  );
}
