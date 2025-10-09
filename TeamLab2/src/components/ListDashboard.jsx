import AddListForm from "./AddListForm";
import ListCard from "./ListCard";

// Functionality to display each list and it's basic contents
export default function ListDashboard({ lists, onAddList, onSelectList, onDeleteList }) {

  /*
  Overall display
  1. Give the user the ability to add a list with AddListForm
  2. Get information for each different list that the user has created. Information comes from ListCard
  3. Draw a separate card for each list: Display some of its corresponding information, "open", and "delete".
  */
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
