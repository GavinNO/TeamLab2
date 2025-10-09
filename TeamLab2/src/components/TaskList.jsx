import TaskItem from "./TaskItem";

// Function that controls information from each task within a list
export default function TaskList({ tasks, listId, onToggleTask, onDeleteTask }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          listId={listId}
          text={task.text}
          done={task.done}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
      {tasks.length === 0 && <p>No tasks to show.</p>}
    </div>
  );
}
