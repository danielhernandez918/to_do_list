import React, { useState } from  'react';
    
    
const ListForm = (props) => {
    const [name, setTask] = useState("");
    const [status, setStatus] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({name, status})
        props.onNewTask({name, status})
        setTask("")
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <label>New Task</label>
            <div className="align">
                <textarea 
                    rows="1"
                    cols="30"
                    placeholder="Enter your task here"
                    name ="task"
                    onChange={ (e) => setTask(e.target.value) }
                    value={name}
                ></textarea>
                <div>
                    <input type="hidden" checked={status}
                        onChange={(e)=>setStatus(e.target.checked)}/>
                </div>
                <input type="submit" value="Add" />
            </div>
        </form>
    );
};
    
export default ListForm;