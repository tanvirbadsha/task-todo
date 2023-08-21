import React, { useState } from 'react'

const Task = (props) => {
    //const [checked, setChecked] = useState([]);
    const [checked, setChecked ] = useState(false);
    const [buttonClicked, setButtonClicked ] = useState(false);

    const handleCheckBox = (event)=>{
        const clicked = event.target.checked;
        clicked ? setChecked(true) : setChecked(false);
    }

    const isChecked = () => checked ? "checked-item": "not-checked-item";


  return (
    <form className='task-form'>
        <input type='checkbox' name='checkbox' onChange={handleCheckBox} value={props.content}  />
        <p className={isChecked()}>{props.content}</p>
        {console.log(`tasks props is ${props.content}`)}
        <button className='button'> Edit</button>
        <button className='button'> Delete</button>
  </form>
  )
}

export default Task