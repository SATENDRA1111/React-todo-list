import React from 'react'

const Task = ({title, dicription,delettask,index}) => {
  return (
    <div className='task'>
        <div>
            <p>{title}</p>
            <span>{dicription}</span>
        </div>
        <button onClick={()=>delettask(index)}>-</button>

    </div>
  )
}

export default Task