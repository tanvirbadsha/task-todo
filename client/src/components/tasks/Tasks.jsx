import React from 'react'
import Task from './Task'

function Tasks(props) {
  return (
    <div className='task'>
        {console.log(props)}
        <Task content={props.content}/>
    </div>
  )
}

export default Tasks