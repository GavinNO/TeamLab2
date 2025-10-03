export default function CounterCard({ id, name, value, onUpdate, onReset, onDelete }) {  
  return ( 
    <div style={{ textAlign: "center", marginTop: "3rem", fontFamily: "Arial" }}> 
      <h1>{name}</h1> 
      <h2>Count: {value}</h2>
      <button onClick={() => onUpdate(id, 1)}>Increment</button> 
      <button onClick={() => onUpdate(id, -1)}>Decrement</button> 
      <button onClick={() => onReset(id)}>Reset</button>
      <button onClick={() => onDelete(id)} style={{ color: "red" }}>Delete</button>
      {value < 0 && <p style={{ color: "red" }}>Careful! Negative count!</p>}
    </div> 
  ); 
}
