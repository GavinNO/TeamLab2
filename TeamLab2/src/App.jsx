import { useState, useEffect } from "react";
import taskList from "./components/TaskList";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";

export default function App() {  
  const [taskList, setTasks] = useState(() => {
    // load from localStorage
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  function addTask(name) {
    if (!taskList.some(c => c.name === name)) {
      setTasks([...taskList, { id: Date.now(), name, value: 0 }]);
    } else {
      alert("Task already exists!");
    }
  }

  function updateTask(id, change) {
    setTasks(taskList.map(c => 
      c.id === id ? { ...c, value: c.value + change } : c
    ));
  }

  function resetTask(id) {
    setTasks(taskList.map(c => 
      c.id === id ? { ...c, value: 0 } : c
    ));
  }

  function deleteTask(id) {
    setTasks(taskList.filter(c => c.id !== id));
  }

  const total = taskList.reduce((sum, c) => sum + c.value, 0);

  return ( 
    <div style={{ textAlign: "center", marginTop: "3rem", fontFamily: "Arial" }}> 
      <Header total={total} />
      <AddTaskForm onAction={addTask} />
      <taskList 
        values={taskList} 
        onUpdate={updateTask} 
        onReset={resetTask}
        onDelete={deleteTask}
      />
    </div> 
  ); 
}
