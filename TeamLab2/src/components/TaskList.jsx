import CounterCard from "./CounterCard";

export default function TaskList({ values, onUpdate, onReset, onDelete }) {  
  return ( 
    <div style={{ textAlign: "center", marginTop: "3rem", fontFamily: "Arial" }}>
      {values.map((counter) => (
        <CounterCard 
          key={counter.id} 
          id={counter.id}
          name={counter.name} 
          value={counter.value} 
          onUpdate={onUpdate}
          onReset={onReset}
          onDelete={onDelete}
        />
      ))}
      {values.length === 0 && <p style={{ color: "red" }}>No counters yet</p>}
    </div>
  ); 
}
