import AddListForm from "./AddListForm";
import ListCard from "./ListCard";

export default function ListDashboard({ lists, onAddList, onSelectList, onDeleteList }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Your Lists</h2>
      <AddListForm onAdd={onAddList} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        {lists.map((list) => (
          <ListCard
            key={list.id}
            id={list.id}
            name={list.name}
            tasks={list.tasks}
            onSelect={() => onSelectList(list.id)}
            onDelete={() => onDeleteList(list.id)}
          />
        ))}
        {lists.length === 0 && <p>No lists yet. Create one above!</p>}
      </div>
    </div>
  );
}
