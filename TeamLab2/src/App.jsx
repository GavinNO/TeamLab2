import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header";
import ListDashboard from "./components/ListDashboard";
import ListPage from "./components/ListPage";

export default function App() {
  const [lists, setLists] = useLocalStorage("lists", [
    {
      id: Date.now(),
      name: "Example List",
      tasks: [
        { id: 1, text: "Example task 1", done: false },
        { id: 2, text: "Example task 2", done: true },
      ],
    },
  ]);

  const [selectedListId, setSelectedListId] = useState(null);

  // --- List Actions ---
  function addList(name) {
    const newList = { id: Date.now(), name, tasks: [] };
    setLists([...lists, newList]);
  }

  function deleteList(listId) {
    if (confirm("Delete this list?")) {
      setLists(lists.filter((l) => l.id !== listId));
      if (selectedListId === listId) setSelectedListId(null);
    }
  }

  // --- Task Actions ---
  function addTask(listId, text) {
    setLists(
      lists.map((l) =>
        l.id === listId
          ? {
              ...l,
              tasks: [...l.tasks, { id: Date.now(), text, done: false }],
            }
          : l
      )
    );
  }

  function toggleTask(listId, taskId) {
    setLists(
      lists.map((l) =>
        l.id === listId
          ? {
              ...l,
              tasks: l.tasks.map((t) =>
                t.id === taskId ? { ...t, done: !t.done } : t
              ),
            }
          : l
      )
    );
  }

  function deleteTask(listId, taskId) {
    setLists(
      lists.map((l) =>
        l.id === listId
          ? { ...l, tasks: l.tasks.filter((t) => t.id !== taskId) }
          : l
      )
    );
  }

  // --- Rendering ---
  const selectedList = lists.find((l) => l.id === selectedListId) || null;

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <Header />
      {selectedListId === null ? (
        <ListDashboard
          lists={lists}
          onAddList={addList}
          onSelectList={setSelectedListId}
          onDeleteList={deleteList}
        />
      ) : (
        <ListPage
          list={selectedList}
          onBack={() => setSelectedListId(null)}
          onAddTask={addTask}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      )}
    </div>
  );
}
