import React, { useState } from 'react';
import './styles.css';
const ListDisplay = (props) => {
    // console.log(props.tasks[0])
    // const[selectedTask, setSelectedTask] = useState(props.tasks[0]);
    const updatedTasks = [...props.tasks]

    const statusHandler = (i, newValue) =>{
        updatedTasks[i].status = newValue
        props.handleUpdate(updatedTasks)
        console.log(props.tasks[i])
    }

    const deleteHandler = (deleteIndex)=>{
        const filteredTasks = props.tasks.filter((task, i)=>i!== deleteIndex)
        props.handleUpdate(filteredTasks)
    }

    return (
        <>
            <h1>Tasks List</h1>
            {
                props.tasks.map((task, i) => {
                    return (
                        <div className="row"  key={i} >
                            <p>{task.name}</p>
                            <input type="checkbox" checked={task.status}
                                onChange={(e)=>statusHandler(i, e.target.checked)}/>
                            <button className="btn btn-danger" onClick={()=>deleteHandler(i)}> Delete </button>
                        </div>
                    )
                })
            }
        </>
    );
};
    
export default ListDisplay;