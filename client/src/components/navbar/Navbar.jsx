import React, { useState } from 'react'
import Tasks from '../tasks/Tasks'

const Navbar = () => {
  const [task, setTask ] = useState("");
  const [isClicked, setIsClicked ] = useState(false);
  const [tasks, setTasks ] = useState([]);

  const handleCreateButton = (e)=>{
    e.preventDefault();
    setTasks(prevTasks => [...prevTasks, task]);
    setIsClicked(true);
    //setTimeout(()=> setIsClicked(false), 1000);
  }

  const handleInput = (e)=>{
    const task = e.target.value;
    setTask(task);
  }


  return (
    <div>
      <div className="navbar">
        <form className='form'>
          <input type='text' placeholder='enter your task name' name='taskName'  onChange={handleInput} value={task}/>
          <button className='button' onClick={handleCreateButton}>Create</button>
          <button type='reset' className='button'>Clear</button>
        </form>
      </div>
      {isClicked &&  tasks.map((task)=>  <Tasks content={task}/>)}
    </div>
  )
}

export default Navbar