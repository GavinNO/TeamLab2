import { useState, useEffect } from "react";
import CounterList from "./components/CounterList";
import Header from "./components/Header";
import AddCounterForm from "./components/AddCounterForm";

export default function App() {  
  const [counterList, setCounters] = useState(() => {
    // load from localStorage
    const saved = localStorage.getItem("counters");
    return saved ? JSON.parse(saved) : [];
  });

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem("counters", JSON.stringify(counterList));
  }, [counterList]);

  function addCounter(name) {
    if (!counterList.some(c => c.name === name)) {
      setCounters([...counterList, { id: Date.now(), name, value: 0 }]);
    } else {
      alert("Counter already exists!");
    }
  }

  function updateCounter(id, change) {
    setCounters(counterList.map(c => 
      c.id === id ? { ...c, value: c.value + change } : c
    ));
  }

  function resetCounter(id) {
    setCounters(counterList.map(c => 
      c.id === id ? { ...c, value: 0 } : c
    ));
  }

  function deleteCounter(id) {
    setCounters(counterList.filter(c => c.id !== id));
  }

  const total = counterList.reduce((sum, c) => sum + c.value, 0);

  return ( 
    <div style={{ textAlign: "center", marginTop: "3rem", fontFamily: "Arial" }}> 
      <Header total={total} />
      <AddCounterForm onAction={addCounter} />
      <CounterList 
        values={counterList} 
        onUpdate={updateCounter} 
        onReset={resetCounter}
        onDelete={deleteCounter}
      />
    </div> 
  ); 
}
