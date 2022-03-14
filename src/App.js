import React, { useState } from 'react';
import './App.css';
import ListDisplay from './components/ListDisplay';
import ListForm from './components/ListForm';

function App() {
  const[tasks, setTasks] = useState([]);

  const handleNewTask = (newTask) =>{
    setTasks([...tasks, newTask])
  };

  const handleUpdate = (allTasks) =>{
    setTasks(allTasks)
  }

  return (
    <div className="App">
        <ListForm onNewTask = {handleNewTask}/>
        <ListDisplay tasks = {tasks} handleUpdate={handleUpdate}/>
    </div>
  );
}

export default App;
